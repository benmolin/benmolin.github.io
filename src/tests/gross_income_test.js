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
                    'name': 'Gross Income Test',
                    'result': true,
                    'explanation': [
                        'The first test we\'ll check for SNAP eligibility is the Gross Income Test.',
                        'Households with an elderly or disabled member do not need to meet the gross income test.'
                    ],
                    'sort_order': 2,
                    'type': 'test',
                }
            } else {
                return {
                    'name': 'Gross Income Test',
                    'result': true,
                    'explanation': [
                        'The first test we\'ll check for SNAP eligibility is the Gross Income Test.',
                        'Households with an elderly or disabled member do not need to meet a strict gross income limit. However, since the household\'s gross income is above 200% of the federal poverty guidelines ($' + this.gross_monthly_income_limit_twice_fpl + ') the household must pass an asset test.'
                    ],
                    'sort_order': 2,
                    'type': 'test',
                }
            }
        };

        let explanation = [
            'The first test we\'ll check for SNAP eligibility is the Gross Income Test.'
        ];

        const below_gross_income_limit = (
            this.gross_monthly_income_limit > this.gross_income
        );

        const gross_monthly_income_limit_explanation = `The gross monthly income limit is $${this.gross_monthly_income_limit}.`;
        explanation.push(gross_monthly_income_limit_explanation);

        const result_in_words = (below_gross_income_limit)
            ? 'passes'
            : 'does not meet';

        const result_explanation = `Since the household gross income is $${this.gross_income}, this household <strong>${result_in_words}</strong> the gross income test.`;
        explanation.push(result_explanation);

        return {
            'name': 'Gross Income Test',
            'result': below_gross_income_limit,
            'explanation': explanation,
            'sort_order': 2,
            'type': 'test'
        };
    }
}

export { GrossIncomeTest };