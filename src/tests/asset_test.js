export class AssetTest {
    constructor(inputs) {
        this.state_or_territory = inputs.state_or_territory;
        this.uses_bbce = inputs.uses_bbce;
        this.household_size = inputs.household_size;
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.gross_income = inputs.gross_income;
        this.resources = inputs.resources;
        this.net_monthly_income_limit = inputs.net_monthly_income_limit;
        this.resource_limit_elderly_or_disabled = inputs.resource_limit_elderly_or_disabled;
        this.resource_limit_non_elderly_or_disabled = inputs.resource_limit_non_elderly_or_disabled;
        this.has_resource_limit_elderly_or_disabled_income_twice_fpl = inputs.has_resource_limit_elderly_or_disabled_income_twice_fpl;

        // Set the 200% monthly income limit
        this.gross_monthly_income_limit_twice_fpl = Math.round(
            2.00 * this.net_monthly_income_limit
        );

    }


    calculate() {

        // If HHEOD, and Gross Income is 200% FPL, and it applies in this state, there is an asset test
        if (this.household_includes_elderly_or_disabled &&
            this.uses_bbce &&
            this.has_resource_limit_elderly_or_disabled_income_twice_fpl &&
            (this.gross_income > this.gross_monthly_income_limit_twice_fpl)) {

            // Asset test using $3,500
            const below_resource_limit = this.resources <= 3500;
            let explanation = `Since this household has resources of $${this.resources}, it <strong>${below_resource_limit ? 'meets' : 'does not meet'}</strong> the asset test.`

            return {
                'name': 'Asset Test',
                'result': below_resource_limit,
                'explanation': [
                    `Since the household includes an elderly or disabled member and has gross income above 200% of the federal poverty guidelines, ${this.state_or_territory} requires the household pass a $3500 asset limit. ` + explanation
                ],
                'sort_order': 4,
                'type': 'test'
            };

        };

        // If no resource limits
        if (!this.resource_limit_elderly_or_disabled &&
            !this.resource_limit_non_elderly_or_disabled) {
            return {
                'name': 'Asset Test',
                'result': true,
                'explanation': [
                    `${this.state_or_territory} does not have an asset test for SNAP eligibility.`
                ],
                'sort_order': 4,
                'type': 'test'
            };
        }

        let resource_limit;
        let explanation;

        // If BBCE, there is no separate limit for HHEOD and non HHEOD resource limits
        if (!this.uses_bbce) {
            if (this.household_includes_elderly_or_disabled) {
                resource_limit = this.resource_limit_elderly_or_disabled;
                explanation = [
                    `Since the household includes an elderly or disabled member, the resource limit is $${resource_limit}.`
                ];
            } else {
                resource_limit = this.resource_limit_non_elderly_or_disabled;
                explanation = [
                    `Since the household does not include an elderly or disabled member, the resource limit is $${resource_limit}.`
                ];
            }
        } else {
            resource_limit = this.resource_limit_elderly_or_disabled;
            explanation = [
                `The resource limit is $${resource_limit}.`
            ];
        };



        const below_resource_limit = this.resources <= resource_limit;
        explanation.push(
            `Since this household has resources of $${this.resources}, it <strong>${below_resource_limit ? 'meets' : 'does not meet'}</strong> the asset test.`
        );

        return {
            'name': 'Asset Test',
            'result': below_resource_limit,
            'explanation': explanation,
            'sort_order': 4,
            'type': 'test'
        };
    }
}