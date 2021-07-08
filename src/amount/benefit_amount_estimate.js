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
                'name': '<span class="en">Benefit Amount</span><span class="es">Cantidad del Beneficio</span>',
                'result': 0,
                'explanation': ['<span class="en">Likely not eligible for SNAP.</span><span class="es">Es probable que no sea elegible para SNAP.</span>'],
                'sort_order': 5,
                'type': 'amount',
            };
        }

        return this.calculate_for_eligible_household();
    }

    calculate_for_eligible_household() {
        const explanation_intro = '<span class="en">To determine the estimated amount of SNAP benefit, we start with the maximum allotment and then subtract 30% of net income.</span><span class="es">Para determinar la cantidad estimada de los beneficios de SNAP, empezamos con la asignación máxima y luego restamos el 30% del ingreso neto.</span>';
        const explanation = [explanation_intro];

        const max_allotment = new FetchMaxAllotment({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        const max_allotment_explanation = `<span class="en">The maximum allotment for this household is</span><span class="es">La asignación máxima para este hogar es de</span> $${max_allotment}.`;
        explanation.push(max_allotment_explanation);

        const thirty_percent_net_income = Math.round(this.net_income * 0.3);
        let estimated_benefit = max_allotment - thirty_percent_net_income;

        const calculation_explanation = `<span class="en">The household net monthly income is $${this.net_income}. Thirty percent of $${this.net_income} is $${thirty_percent_net_income}. So to calculate the estimated benefit:</span><span class="es">El ingreso neto mensual del hogar es de $${this.net_income}. El treinta por ciento de $${this.net_income} es $${thirty_percent_net_income}. Así que para calcular el estimado del beneficio:</span>`;

        explanation.push(calculation_explanation);
        explanation.push('');
        const calcuation_math_explanation = `$${max_allotment} - $${thirty_percent_net_income} = $${estimated_benefit} <span class="en">estimated benefit</span><span class="es">estimado del beneficio</span>`;
        explanation.push(calcuation_math_explanation);

        const min_allotment = new FetchMinAllotment({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        // Check if minimum allotment should be applied.
        if (min_allotment && min_allotment > estimated_benefit) {
            estimated_benefit = min_allotment;

            const min_allotment_explanation = `<span class="en">There is a minimum monthly allotment for this household of</span><span class="es">Hay una asignación mensual mínima para este hogar de</span> $${min_allotment}.`;
            explanation.push(min_allotment_explanation);
            const min_allotment_applied_explanation = (
                `<span class="en">Since the calculated benefit amount would be below the minimum allotment, apply the minimum allotment amount of $${min_allotment} instead.</span><span class="es">Dado que la cantidad del beneficio calculado estaría por debajo de la asignación mínima, aplique la cantidad de asignación mínima de $${min_allotment} en su lugar.</span>`
            );
            explanation.push(min_allotment_applied_explanation);
        }

        // Check if estimated benefit below zero.
        if (0 > estimated_benefit) {
            estimated_benefit = 0;

            const zero_benefit_explanation = (
                '<span class="en">In this case, although the household is eligible, because of their income the calculation results in zero estimated monthly benefit.</span><span class="es">En este caso, aunque el hogar es elegible, debido a sus ingresos el cálculo resulta en cero como la cantidad del estimado del beneficio mensual.</span>'
            );
            explanation.push(zero_benefit_explanation);
        }

        if (!this.use_emergency_allotment) {
            // Without emergency allotments in effect
            return {
                'name': '<span class="en">Benefit Amount</span><span class="es">Cantidad del Beneficio</span>',
                'sort_order': 5,
                'result': estimated_benefit,
                'explanation': explanation,
                'type': 'amount',
            };
        }

        if (estimated_benefit === max_allotment) {
            // With emergency allotments, household already receiving max benefit:
            explanation.push(
                `<span class="en">This gives us an estimated monthly benefit of <b>$${estimated_benefit}</b>, which is the maximum benefit amount.</span><span class="es">Esto nos da un estimado del beneficio mensual de <b>$${estimated_benefit}</b>, lo cual es la cantidad máxima de beneficios.</span>`
            );
        } else {
            explanation.push(
                `<span class="en">This gives us an estimated monthly benefit of <b>$${estimated_benefit}</b>.</span><span class="es">Esto nos da un estimado del beneficio mensual de <b>$${estimated_benefit}</b>.</span>`
            );
        };

        // 15% COVID Increase
        explanation.push(
            `<span class="en">Due to the current pandemic, SNAP benefit amounts are temporarily increased. First, all base benefit amounts are increased by 15% until June 30th. So the new base benefit amount for this household is:</span><span class="es">Debido a la pandemia actual, la cantidad de los beneficios de SNAP ha aumentado temporalmente. En primer lugar, todas las cantidades de los beneficios bases aumentan un 15% hasta el 30 de junio. Por lo tanto, la nueva cantidad del beneficio base para este hogar es:</span>`
        );

        const estimated_benefit_plus15 = Math.round(estimated_benefit * 1.15);
        const fifteen_benefit_math = `$${estimated_benefit} &times; 115% = $${estimated_benefit_plus15} <span class="en">base benefit</span><span class="es">cantidades de los beneficios bases</span>`;
        explanation.push(fifteen_benefit_math);

        // Emergency Allotment increase
        explanation.push(
            `<span class="en">Second, the household's benefit amount will be increased to 115% of the maximum allotment amount for the household size or increased by $95, whichever is a larger increase. Amounts over 115% the maximum allotment may not yet be active in your state. Including the temporary increases to SNAP, the final estimated benefit would be:</span><span class="es">En segundo lugar, la cantidad del beneficio del hogar se aumentará al 115% de la cantidad máxima de asignación para el tamaño del hogar o se aumentará en $95, lo que sea un aumento mayor. Incluyendo los aumentos temporales de SNAP, el beneficio final estimado es:</span>`
        );

        const temp_max_allotment =  Math.round(1.15 * max_allotment);
        const ea_increase = Math.max(95, temp_max_allotment - estimated_benefit_plus15);
        const final_amount = estimated_benefit_plus15 + ea_increase;
        const ea_increase_math = `$${estimated_benefit_plus15} + $${ea_increase} = <b>$${final_amount} <span class="en">estimated benefit</span><span class="es">estimado del beneficio</span></b>`;
        explanation.push(ea_increase_math);        

        return {
            'name': '<span class="en">Benefit Amount</span><span class="es">Cantidad del Beneficio</span>',
            'sort_order': 5,
            'result': estimated_benefit,
            'emergency_allotment_estimated_benefit': max_allotment,
            'explanation': explanation,
            'type': 'amount'
        };
    }
}