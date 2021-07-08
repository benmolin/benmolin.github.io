class GrossIncomeTest {
    constructor(inputs) {
        this.state_or_territory = inputs.state_or_territory;
        this.uses_bbce = inputs.uses_bbce;
        this.household_size = inputs.household_size;
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.resources = inputs.resources;
        this.gross_income = inputs.gross_income;
        this.net_monthly_income_limit = inputs.net_monthly_income_limit;
        this.gross_income_limit_factor = inputs.gross_income_limit_factor;
        this.has_resource_limit_elderly_or_disabled_income_twice_fpl = inputs.has_resource_limit_elderly_or_disabled_income_twice_fpl;

        // Set gross monthly income limit; derived from net monthly income limit
        this.gross_monthly_income_limit = Math.round(
            this.gross_income_limit_factor * this.net_monthly_income_limit
        );

        // Set the 200% monthly income limit
        this.gross_monthly_income_limit_twice_fpl = Math.round(
            2.00 * this.net_monthly_income_limit
        );
    }

    calculate() {
        // In most scenarios, there is no gross income test for HHEOD
        // Some states have a 200% gross income threshold that if they don't make they have to pass an asset test
        // It's not a fail, but it does mean there's another test
        if (this.household_includes_elderly_or_disabled) {
            if ((!this.has_resource_limit_elderly_or_disabled_income_twice_fpl) || !this.uses_bbce || (this.gross_monthly_income_limit_twice_fpl > this.gross_income)) {
                return {
                    'name': '<span class="en">Gross Income Test</span><span class="es">Prueba de Ingreso Bruto</span>',
                    'result': true,
                    'explanation': [
                        '<span class="en">The first test we\'ll check for SNAP eligibility is the Gross Income Test.</span><span class="es">La primera prueba en la cual revisaremos la elegibilidad SNAP es la Prueba de Ingreso Bruto</span>',
                        '<span class="en">Households with an elderly or disabled member do not need to meet the gross income test.</span><span class="es">Los hogares con un miembro anciano o discapacitado no tienen que cumplir con la prueba de ingreso bruto.</span>'
                    ],
                    'sort_order': 2,
                    'type': 'test',
                }
            } else {
                return {
                    'name': '<span class="en">Gross Income Test</span><span class="es">Prueba de Ingreso Bruto</span>',
                    'result': true,
                    'explanation': [
                        '<span class="en">The first test we\'ll check for SNAP eligibility is the Gross Income Test.</span><span class="es">La primera prueba en la cual revisaremos la elegibilidad SNAP es la Prueba de Ingreso Bruto</span>',
                        '<span class="en">Households with an elderly or disabled member do not need to meet a strict gross income limit. However, since the household\'s gross income is above 200% of the federal poverty guidelines ($' + this.gross_monthly_income_limit_twice_fpl + ') the household must pass an asset test.</span><span class="es">Los hogares con un miembro anciano o discapacitado no tienen que cumplir con un estricto límite de ingreso bruto. Sin embargo, ya que el ingreso bruto del hogar está por encima del 200% del nivel federal de pobreza ($' + this.gross_monthly_income_limit_twice_fpl + '), la familia debe pasar una prueba de bienes.</span>'                        
                    ],
                    'sort_order': 2,
                    'type': 'test',
                }
            }
        };

        let explanation = [
            '<span class="en">The first test we\'ll check for SNAP eligibility is the Gross Income Test.</span><span class="es">La primera prueba en la cual revisaremos la elegibilidad SNAP es la Prueba de Ingreso Bruto</span>'
        ];

        const below_gross_income_limit = (
            this.gross_monthly_income_limit > this.gross_income
        );

        const gross_monthly_income_limit_explanation = `<span class="en">The gross monthly income limit is</span><span class="es">El límite de ingreso bruto mensual es</span> $${this.gross_monthly_income_limit}.`; 
        explanation.push(gross_monthly_income_limit_explanation);

        const result_in_words = (below_gross_income_limit)
            ? 'passes'
            : 'does not meet';

        const result_in_words_es = (below_gross_income_limit)
            ? 'pasa'
            : 'no cumple con';

        const result_explanation = `<span class="en">Since the household gross income is $${this.gross_income}, this household <strong>${result_in_words}</strong> the gross income test.</span><span class="es">Dado que el ingreso bruto del hogar es $${this.gross_income}, este hogar <strong>${result_in_words_es}</strong> la prueba de ingreso bruto.</span>`;
        explanation.push(result_explanation);

        return {
            'name': '<span class="en">Gross Income Test</span><span class="es">Prueba de Ingreso Bruto</span>',
            'result': below_gross_income_limit,
            'explanation': explanation,
            'sort_order': 2,
            'type': 'test'
        };
    }
}

export { GrossIncomeTest };