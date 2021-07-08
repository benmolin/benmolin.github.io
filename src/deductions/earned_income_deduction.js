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
                '<span class="en">Next, we add the earned income deduction. This is equal to 20% of income from jobs or self-employment:</span><span class="es">A continuación, añadimos la deducción por ingreso del trabajo. Esto es equivalente al 20% de los ingresos de trabajo o del trabajo por cuenta propia:</span>'
            ),
            (''),
            (
                `$${earned_income} x 0.2 = $${earned_income_deduction} <span class="en">earned income deduction</span><span class="es">deducción por ingreso del trabajo</span>`
            )
        ];

        return {
            'result': earned_income_deduction,
            'explanation': explanation
        };
    }
}