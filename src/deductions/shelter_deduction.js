import { FetchMaxShelterDeductions } from '../program_data_api/fetch_max_shelter_deductions.js';

export class ShelterDeduction {
    constructor(inputs) {
        this.target_year = inputs.target_year;
        this.adjusted_income = inputs.adjusted_income;
        this.rent_or_mortgage = inputs.rent_or_mortgage;
        this.homeowners_insurance_and_taxes = inputs.homeowners_insurance_and_taxes;
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.state_or_territory = inputs.state_or_territory;
        this.household_size = inputs.household_size;
        this.utility_electricity = inputs.utility_electricity;
        this.utility_gas = inputs.utility_gas;
        this.utility_heating = inputs.utility_heating;
        this.utility_phone = inputs.utility_phone;
        this.utility_sewage = inputs.utility_sewage;
        this.utility_trash = inputs.utility_trash;
        this.utility_water = inputs.utility_water;
        this.standard_utility_allowances = inputs.standard_utility_allowances;
    }

    calculate() {
        const explanation = [
            'Next, we calculate the Excess Shelter Deduction. To calculate ' +
            'this deduction, we need to find half of the household adjusted income. ' +
            'Adjusted income is equal to gross income, minus all deductions calculated ' +
            'up to this point.'
        ];

        const half_adjusted_income = Math.round(this.adjusted_income / 2);

        const half_adjusted_income_explanation = (
            `For this household, adjusted income is $${this.adjusted_income} ` +
            `and half of adjusted income is $${half_adjusted_income}.`
        );
        explanation.push(half_adjusted_income_explanation);

        const shelter_costs_explanation = (
            'Next, add up shelter costs by adding any costs of rent, mortgage ' +
            'payments, homeowners insurance and property taxes, and utility costs. ' +
            'Let\'s start with everything except utilities:'
        );
        explanation.push(shelter_costs_explanation);

        this.base_shelter_costs = this.rent_or_mortgage + this.homeowners_insurance_and_taxes;

        const shelter_costs_math_explanation = (
            `$${this.rent_or_mortgage} rent or mortgage + ` +
            `$${this.homeowners_insurance_and_taxes} homeowners insurance and taxes = ` +
            `$${this.base_shelter_costs}`
        );
        explanation.push(shelter_costs_math_explanation);

        // # Handle utilities:
        explanation.push('Now let\'s factor in utility costs.');

        const utility_costs = this.calculate_utility_costs();
        const shelter_costs = this.base_shelter_costs + utility_costs['result'];
        explanation.push(utility_costs['explanation']);


        if (half_adjusted_income > shelter_costs) {
            explanation.push(
                'In this case, shelter costs do not exceed half of adjusted income, ' +
                'so the excess shelter deduction does not apply.'
            );

            return {
                'result': 0,
                'explanation': explanation
            };
        }

        const raw_deduction_amount = shelter_costs - half_adjusted_income;

        const excess_shelter_costs_math_intro = (
            'Subtract half of adjusted income from shelter costs to find ' +
            'the base deduction amount:'
        );
        explanation.push(excess_shelter_costs_math_intro);

        const excess_shelter_costs_math_explanation = (
            `$${shelter_costs} shelter costs - $${half_adjusted_income} half of adjusted income = $${raw_deduction_amount} base deduction`
        );
        explanation.push(excess_shelter_costs_math_explanation);

        // If household includes elderly or disabled person, no limit on
        // the amount of the excess shelter deduction.
        if (this.household_includes_elderly_or_disabled) {
            explanation.push(
                `Because the household includes an elderly or disabled household member, there is no limit to the excess shelter deduction amount, so the full deduction amount of $${raw_deduction_amount} applies.`
            );

            return {
                'result': raw_deduction_amount,
                'explanation': explanation,
            };
        }

        // If household does not include an elderly or disabled person,
        // check to see if the deduction amount would be above the limit.
        const maximum_shelter_deduction = new FetchMaxShelterDeductions({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        if (raw_deduction_amount > maximum_shelter_deduction) {
            explanation.push(
                `In this case, the household has a maximum excess shelter deduction of $${maximum_shelter_deduction}, so the maximum deduction amount applies.`
            );

            return {
                'result': maximum_shelter_deduction,
                'explanation': explanation
            };
        }

        // Finally, handle case where household does not include an elderly or
        // disabled person and the deduction amount does not exceed the limit.
        return {
            'result': raw_deduction_amount,
            'explanation': explanation
        };
    }

    calculate_utility_costs() {

        // State with Standard Utility Allowances, no utility allowance claimed
        if (!this.utility_electricity &&
            !this.utility_gas &&
            !this.utility_heating &&
            !this.utility_phone &&
            !this.utility_sewage &&
            !this.utility_trash &&
            !this.utility_water) {
            // In this case the client has either:
            //
            // * Explicitly told us the end user does not qualify for a
            // standard utility allowance ("NONE"), or,
            //
            // * The client has left the field blank (None); we assume that
            // the end user does not pay for utilities separately and
            // for that reason does not receive a SUA deduction:
            return {
                'result': 0,
                'explanation': (
                    'In this case there is no deduction for utilities, likely ' +
                    'because the household is not billed separately for utilities.'
                )
            };
        }


        // Start by listing the different utility groups
        // Our goal is to find out which the client is eligible for, then figure out which is the highest allowance
        const utility_profiles = [
            [this.utility_heating, 'HEATING_AND_COOLING', 'heating and cooling'],
            [this.utility_electricity, 'ELECTRICITY', 'electricity'],
            [this.utility_gas, 'GAS', 'gas and fuel'],
            [this.utility_phone, 'PHONE', 'phone'],
            [this.utility_sewage, 'SEWAGE', 'sewage'],
            [this.utility_trash, 'TRASH', 'trash'],
            [this.utility_water, 'WATER', 'water'],
        ]

        // Running list of qualified utility amounts
        var qualified_utility_amounts = []

        // If there are two or more utilities, basic utility allowance
        var num_utilities_paid = 0;
        for (var i = 0; i < utility_profiles.length; i++) {
            num_utilities_paid += utility_profiles[i][0];
        };
        if (num_utilities_paid >= 2) {
            qualified_utility_amounts.push(['BASIC_LIMITED_ALLOWANCE', this.standard_utility_allowances['BASIC_LIMITED_ALLOWANCE'], 'basic']);
        };

        // For the rest of the qualified utilities, add them to the qualified array
        for (var i = 0; i < utility_profiles.length; i++) {
            if (utility_profiles[i][0] == true) {
                qualified_utility_amounts.push([utility_profiles[i][1], this.standard_utility_allowances[utility_profiles[i][1]], utility_profiles[i][2]]);
            };
        };

        // Finally, find the highest utility deduction
        // The reason we have to do this is some states do not have a BLA. Or the Phone is higher than the single utility.
        var utility_deduction_title = "None";
        var utility_deduction_amount = 0;

        for (var i = 0; i < qualified_utility_amounts.length; i++) {
            if (qualified_utility_amounts[i][1] > utility_deduction_amount) {
                utility_deduction_title = qualified_utility_amounts[i][2];
                utility_deduction_amount = qualified_utility_amounts[i][1];
            };
        };

        // Some states the deduction might be $0. In this case, treat it as no utility deductions
        if (utility_deduction_amount == 0) {
            return {
                'result': 0,
                'explanation': (
                    'In this case there is no deduction for utilities, likely ' +
                    'because this state only allows deductions for some utilities.'
                )
            };
        };

        return {
            'result': utility_deduction_amount,
            'explanation': `In this case, a ${utility_deduction_title} utility deduction of $${utility_deduction_amount} applies, so total shelter plus utilities costs come to $${utility_deduction_amount + this.base_shelter_costs}.`
        };
    }
}