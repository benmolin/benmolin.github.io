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
            '<span class="en">Next, we calculate the Excess Shelter Deduction. To calculate this deduction, we need to find half of the household adjusted income. Adjusted income is equal to gross income, minus all deductions calculated up to this point.</span><span class="es">A continuación, se calcula la deducción de exceso de vivienda. Para calcular esta deducción, tenemos que encontrar la mitad del ingreso ajustado del hogar. El ingreso ajustado es igual al ingreso bruto, menos todas las deducciones calculadas hasta este punto.</span>'
        ];

        const half_adjusted_income = Math.round(this.adjusted_income / 2);

        const half_adjusted_income_explanation = (
            `<span class="en">For this household, adjusted income is $${this.adjusted_income} and half of adjusted income is $${half_adjusted_income}.</span><span class="es">Para este hogar, el ingreso ajustado es $${this.adjusted_income} y la mitad del ingreso ajustado es $${half_adjusted_income}</span>`
        );
        explanation.push(half_adjusted_income_explanation);

        const shelter_costs_explanation = (
            `<span class="en">Next, add up shelter costs by adding any costs of rent, mortgage payments, homeowners insurance and property taxes, and utility costs. Let\'s start with everything except utilities:</span><span class="es">A continuación, sume los costos de vivienda añadiendo los costos de renta, pagos de hipoteca, seguros de propiedad y los impuestos de propiedad y costos de servicios públicos. Vamos a empezar con todo, excepto los servicios públicos:</span>`
        );
        explanation.push(shelter_costs_explanation);

        this.base_shelter_costs = this.rent_or_mortgage + this.homeowners_insurance_and_taxes;

        const shelter_costs_math_explanation = (
            `$${this.rent_or_mortgage} <span class="en">rent or mortgage</span><span class="es">Renta de o hipoteca</span> + ` +
            `$${this.homeowners_insurance_and_taxes} <span class="en">homeowners insurance and taxes</span><span class="es">Seguros propietarios e impuestos</span> = ` +
            `$${this.base_shelter_costs}`
        );
        explanation.push(shelter_costs_math_explanation);

        // # Handle utilities:
        explanation.push(`<span class="en">Now let\'s factor in utility costs.</span><span class="es">Ahora vamos a tomar en cuenta los costos de los servicios públicos.</span>`);

        const utility_costs = this.calculate_utility_costs();
        const shelter_costs = this.base_shelter_costs + utility_costs['result'];
        explanation.push(utility_costs['explanation']);


        if (half_adjusted_income > shelter_costs) {
            explanation.push(
                `<span class="en">In this case, shelter costs do not exceed half of adjusted income, so the excess shelter deduction does not apply.</span><span class="es">En este caso, los costos de vivienda no superan la mitad de los costos ajustados, por lo que la deducción de exceso de vivienda no aplica.</span>`
            );

            return {
                'result': 0,
                'explanation': explanation
            };
        }

        const raw_deduction_amount = shelter_costs - half_adjusted_income;

        const excess_shelter_costs_math_intro = (
            `<span class="en">Subtract half of adjusted income from shelter costs to find the base deduction amount:</span><span class="es">Reste la mitad de los ingresos ajustados de los costos de vivienda para la cantidad base de la deducción:</span>`
        );
        explanation.push(excess_shelter_costs_math_intro);

        const excess_shelter_costs_math_explanation = (
            `$${shelter_costs} <span class="en">shelter costs</span><span class="es">gastos de vivienda</span> - $${half_adjusted_income} <span class="en">half of adjusted income</span><span class="es">mitad del ingreso ajustado</span> = $${raw_deduction_amount} <span class="en">base deduction</span><span class="es">base de la deducción</span>`
        );
        explanation.push(excess_shelter_costs_math_explanation);

        // If household includes elderly or disabled person, no limit on
        // the amount of the excess shelter deduction.
        if (this.household_includes_elderly_or_disabled) {
            explanation.push(
                `<span class="en">Because the household includes an elderly or disabled household member, there is no limit to the excess shelter deduction amount, so the full deduction amount of $${raw_deduction_amount} applies.</span><span class="es">Debido a que el hogar incluye a un miembro anciano o discapacitado, no hay límite para el monto de la deducción de exceso de vivienda, por lo que se aplica el monto total de la deducción de $${raw_deduction_amount}</span>`
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
                `<span class="en">In this case, the household has a maximum excess shelter deduction of $${maximum_shelter_deduction}, so the maximum deduction amount applies.</span><span class="es">En este caso, el hogar tiene una deducción máxima por deducción de exceso de vivienda de $${maximum_shelter_deduction}, por lo que se aplica la cantidad máxima de deducción.</span>`
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
                    '<span class="en">In this case there is no deduction for utilities, likely because the household is not billed separately for utilities.</span><span class="es">En este caso no hay ninguna deducción por servicios públicos, probablemente debido a que la casa no recibe una factura por separado para los servicios públicos.</span>'
                )
            };
        }


        // Start by listing the different utility groups
        // Our goal is to find out which the client is eligible for, then figure out which is the highest allowance
        const utility_profiles = [
            [this.utility_heating, 'HEATING_AND_COOLING', 'heating and cooling', 'calefacción y refrigeración'],
            [this.utility_electricity, 'ELECTRICITY', 'electricity', 'electricidad'],
            [this.utility_gas, 'GAS', 'gas and fuel', 'gas y combustible'],
            [this.utility_phone, 'PHONE', 'phone', 'teléfono'],
            [this.utility_sewage, 'SEWAGE', 'sewage', 'alcantarillado'],
            [this.utility_trash, 'TRASH', 'trash', 'basura'],
            [this.utility_water, 'WATER', 'water', 'agua'],
        ]

        // Running list of qualified utility amounts
        var qualified_utility_amounts = []

        // If there are two or more utilities, basic utility allowance
        var num_utilities_paid = 0;
        for (var i = 0; i < utility_profiles.length; i++) {
            num_utilities_paid += utility_profiles[i][0];
        };
        if (num_utilities_paid >= 2) {
            qualified_utility_amounts.push(['BASIC_LIMITED_ALLOWANCE', this.standard_utility_allowances['BASIC_LIMITED_ALLOWANCE'], 'basic', 'básico']);
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
        var utility_deduction_title_es = "Ninguno";
        var utility_deduction_amount = 0;

        for (var i = 0; i < qualified_utility_amounts.length; i++) {
            if (qualified_utility_amounts[i][1] > utility_deduction_amount) {
                utility_deduction_title = qualified_utility_amounts[i][2];
                utility_deduction_title_es = qualified_utility_amounts[i][3];
                utility_deduction_amount = qualified_utility_amounts[i][1];
            };
        };

        // Some states the deduction might be $0. In this case, treat it as no utility deductions
        if (utility_deduction_amount == 0) {
            return {
                'result': 0,
                'explanation': (
                    `<span class="en">In this case there is no deduction for utilities, likely because this state only allows deductions for some utilities.</span><span class="es">En este caso no hay ninguna deducción por los servicios públicos, probablemente porque este estado sólo permite deducciones de algunos servicios públicos.</span>`
                )
            };
        };

        return {
            'result': utility_deduction_amount,
            'explanation': `<span class="en">In this case, a ${utility_deduction_title} utility deduction of $${utility_deduction_amount} applies, so total shelter plus utilities costs come to $${utility_deduction_amount + this.base_shelter_costs}.</span><span class="es">En este caso, una deducción del ${utility_deduction_title_es} de $${utility_deduction_amount} es aplicable, por lo tanto el total de la vivienda más los servicios públicos costes resultan en $${utility_deduction_amount + this.base_shelter_costs}.</span>`
        };
    }
}