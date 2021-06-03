export class EarnedIncomeDeduction {
    constructor(inputs) {
        this.monthly_job_income = inputs.monthly_job_income;
        this.noneligible_monthly_income = inputs.noneligible_monthly_income;
        this.noneligible_proration = inputs.noneligible_proration;
    }

    calculate() {
        var earned_income = Math.max(0, Math.round(this.monthly_job_income - (this.noneligible_monthly_income * (1 - this.noneligible_proration))));
        const earned_income_deduction = Math.round(0.2 * earned_income);

        const explanation = [
            (
                'Next, we add the earned income deduction. This is equal to 20% of income from jobs or self-employment: '
            ),
            (''),
            (
                `$${earned_income} x 0.2 = $${earned_income_deduction} earned income deduction`
            )
        ];

        return {
            'result': earned_income_deduction,
            'explanation': explanation
        };
    }
}
