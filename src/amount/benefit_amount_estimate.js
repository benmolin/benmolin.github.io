import { FetchMaxAllotment } from '../program_data_api/fetch_max_allotment.js';
import { FetchMinAllotment } from '../program_data_api/fetch_min_allotment.js';

export class BenefitAmountEstimate {
    /*::
    is_eligible: boolean;
    use_emergency_allotment: boolean;
    */

    constructor(inputs) {
        this.state_or_territory = inputs.state_or_territory;
        this.household_size = inputs.household_size;
        this.is_eligible = inputs.is_eligible;
        this.net_income = inputs.net_income;
        this.use_emergency_allotment = inputs.use_emergency_allotment;
        this.target_year = inputs.target_year;
        this.covid = inputs.covid;
    }

    calculate() {
        if (!this.is_eligible) {
            return {
                'name': 'Benefit Amount',
                'result': 0,
                'explanation': ['Likely not eligible for SNAP.'],
                'sort_order': 5,
                'type': 'amount',
            };
        }

        return this.calculate_for_eligible_household();
    }

    calculate_for_eligible_household() {
        const explanation_intro = 'To determine the estimated amount of SNAP benefit, we start with the maximum allotment and then subtract 30% of net income.';
        const explanation = [explanation_intro];

        const max_allotment = new FetchMaxAllotment({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        const max_allotment_explanation = `The maximum allotment for this household is $${max_allotment}.`;
        explanation.push(max_allotment_explanation);

        const thirty_percent_net_income = Math.round(this.net_income * 0.3);
        let estimated_benefit = max_allotment - thirty_percent_net_income;

        const calculation_explanation = `The household net monthly income is $${this.net_income}. Thirty percent of $${this.net_income} is $${thirty_percent_net_income}. So to calculate the estimated benefit:`;

        explanation.push(calculation_explanation);
        explanation.push('');
        const calcuation_math_explanation = `$${max_allotment} - $${thirty_percent_net_income} = $${estimated_benefit} estimated benefit`;
        explanation.push(calcuation_math_explanation);

        const min_allotment = new FetchMinAllotment({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        // Check if minimum allotment should be applied.
        if (min_allotment && min_allotment > estimated_benefit) {
            estimated_benefit = min_allotment;

            const min_allotment_explanation = `There is a minimum monthly allotment for this household of $${min_allotment}.`;
            explanation.push(min_allotment_explanation);
            const min_allotment_applied_explanation = (
                `Since the calculated benefit amount would be below the minimum allotment, apply the minimum allotment amount of $${min_allotment} instead.`
            );
            explanation.push(min_allotment_applied_explanation);
        }

        // Check if estimated benefit below zero.
        if (0 > estimated_benefit) {
            estimated_benefit = 0;

            const zero_benefit_explanation = (
                'In this case, although the household is eligible, because of their income the calculation results in zero estimated monthly benefit.'
            );
            explanation.push(zero_benefit_explanation);
        }

        if (!this.use_emergency_allotment) {
            // Without emergency allotments in effect
            return {
                'name': 'Benefit Amount',
                'sort_order': 5,
                'result': estimated_benefit,
                'explanation': explanation,
                'type': 'amount',
            };
        }

        if (estimated_benefit === max_allotment) {
            // With emergency allotments, household already receiving max benefit:
            explanation.push(
                `This gives us an estimated monthly benefit of <b>$${estimated_benefit}</b>, which is the maximum benefit amount.`
            );
        } else {
            explanation.push(
                `This gives us an estimated monthly benefit of <b>$${estimated_benefit}</b>.`
            );
        };

        // 15% COVID Increase
        explanation.push(
            `Due to the current pandemic, SNAP benefit amounts are temporarily increased. First, all base benefit amounts are increased by 15% until June 30th. So the new base benefit amount for this household is:`
        );

        const estimated_benefit_plus15 = Math.round(estimated_benefit * 1.15);
        const fifteen_benefit_math = `$${estimated_benefit} &times; 115% = $${estimated_benefit_plus15} base benefit`;
        explanation.push(fifteen_benefit_math);

        // Emergency Allotment increase
        explanation.push(
            `Second, the household's benefit amount will be increased to 115% of the maximum allotment amount for the household size or increased by $95, whichever is a larger increase. Including the temporary increases to SNAP, the final estimated benefit would be:`
        );

        const temp_max_allotment =  Math.round(1.15 * max_allotment);
        const ea_increase = Math.max(95, temp_max_allotment - estimated_benefit_plus15);
        const final_amount = estimated_benefit_plus15 + ea_increase;
        const ea_increase_math = `$${estimated_benefit_plus15} + $${ea_increase} = <b>$${final_amount} estimated benefit</b>`;
        explanation.push(ea_increase_math);        

        return {
            'name': 'Benefit Amount',
            'sort_order': 5,
            'result': estimated_benefit,
            'emergency_allotment_estimated_benefit': max_allotment,
            'explanation': explanation,
            'type': 'amount'
        };
    }
}