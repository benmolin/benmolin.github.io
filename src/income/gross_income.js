export class GrossIncome {
    constructor(inputs) {
        this.monthly_job_income = inputs.monthly_job_income;
        this.monthly_non_job_income = inputs.monthly_non_job_income;
        this.child_support_payments_treatment = inputs.child_support_payments_treatment;
        this.court_ordered_child_support_payments = inputs.court_ordered_child_support_payments;
        this.unemployment_benefits = inputs.unemployment_benefits;
        this.noneligible_monthly_income = inputs.noneligible_monthly_income;
        this.noneligible_proration = inputs.noneligible_proration;
    }

    calculate() {
        const explanation = [];



        const gross_income_intro = (
            `<span class="en">We start with calculating gross income. We find the household\'s gross income by adding up monthly income from both job and non-job sources.</span><span class="es">Empezamos con el cálculo de los ingresos brutos. Encontramos los ingresos brutos del hogar sumando los ingresos mensuales de fuentes laborales y no laborales.</span>`
        );
        explanation.push(gross_income_intro);

        // JOB AND NONJOB
        var monthly_income = this.monthly_job_income + this.monthly_non_job_income;

        const gross_income_math = (
            `$${this.monthly_job_income} <span class="en">monthly job income</span><span class="es">de ingresos mensuales laborales</span> + ` +
            `$${this.monthly_non_job_income} <span class="en">monthly non-job income</span><span class="es">de ingresos mensuales no laborales</span> = ` +
            `$${monthly_income} <span class="en">gross income</span><span class="es">ingresos brutos</span>`
        );
        explanation.push(gross_income_math);

        // NON-CITIZEN
        if (this.noneligible_monthly_income != 0){

            const eligible_income = monthly_income - this.noneligible_monthly_income;
            const noneligible_gross_explanation = (
                `<span class="en">As there are ineligible non-citizens in the household, we will need to prorate their income. This household has:</span><span class="es">Como hay no ciudadanos no elegibles en el hogar, tendremos que prorratear sus ingresos. Este hogar cuenta con:</span><br><br>` +

                `$${this.noneligible_monthly_income} <span class="en">income from ineligible members</span><span class="es">ingresos de miembros no elegibles</span> + ` +
                `$${eligible_income} <span class="en">income from eligible members</span><span class="es">ingresos de los miembros elegibles</span> = ` +
                `$${monthly_income} <span class="en">gross income</span><span class="es">ingreso bruto</span>`
                
            );
            explanation.push(noneligible_gross_explanation);

            monthly_income = Math.round(eligible_income + this.noneligible_monthly_income * this.noneligible_proration);
            const noneligible_proration_explanation = (
                `<span class="en">We will prorate the ineligible members\' income by the proportion of the household that is eligible,</span><span class="es">Prorratearemos los ingresos de los miembros no elegibles por la proporción del hogar que es elegible,</span> ${Math.round(this.noneligible_proration * 100)}%. <br><br>` +

                `$${this.noneligible_monthly_income} × ${Math.round(this.noneligible_proration * 100)}% <span class="en">prorated income from ineligible members</span><span class="es">de ingresos prorrateados de miembros no elegibles</span> + ` +
                `$${eligible_income} <span class="en">income from eligible members</span><span class="es"> ingresos de los miembros elegibles</span> = ` +
                `$${monthly_income} <span class="en">prorated gross income</span><span class="es">prorrateados de ingresos brutos</span>`
                
            );
            explanation.push(noneligible_proration_explanation);  

        }
        

        // UNEMPLOYMENT
        if (this.unemployment_benefits){

            const unemployment_benefits_explanation = (
                '<span class="en">The current $300 weekly increase to unemployment benefits are counted as a gross income exclusion. The gross income is reduced by $1200 to exclude the additional unemployment benefits.</span><span class="es">El aumento actual de $300 por semana a los beneficios de desempleo se considera como una exclusión de los ingresos brutos. El ingreso no laboral se reduce por $1200 para excluir los beneficios adicionales de desempleo.</span><br><br>' +
                
                `$${monthly_income} <span class="en">gross income</span><span class="es">ingreso bruto</span> - ` +
                `$1200 <span class="en">excluded income</span><span class="es">ingresos excluidos</span> = ` +
                `$${monthly_income - 1200} <span class="en">adjusted gross income</span><span class="es">ingreso bruto ajustado</span>`
            );
            explanation.push(unemployment_benefits_explanation);
            monthly_income = monthly_income - 1200;
        };

        // CHILD SUPPORT
        if ((this.child_support_payments_treatment === 'EXCLUDE') & (this.court_ordered_child_support_payments != 0)){
            const child_support_payments_explanation = (
                '<span class="en">In this state, court-ordered child support payments are counted as a gross income exclusion. The gross income is adjusted to exclude monthly court-ordered child support:</span><span class="es">En este estado, los pagos de manutención ordenados por la corte se cuentan como una exclusión de los ingresos brutos. El ingreso bruto es ajustado para excluir la manutención de hijos mensual ordenada por la corte:</span>'
            );
            explanation.push(child_support_payments_explanation);
    
            const monthly_income_minus_child_support = (
                monthly_income - this.court_ordered_child_support_payments
            );
    
            const child_support_payments_math = (
                `$${monthly_income} <span class="en">gross income</span><span class="es">ingreso bruto</span> - ` +
                `$${this.court_ordered_child_support_payments} <span class="en">court-ordered child support</span><span class="es">los pagos de manutención de hijos ordenados por la corte</span> = ` +
                `$${monthly_income_minus_child_support} <span class="en">adjusted gross income</span><span class="es">ingreso bruto ajustado</span>`
            );
            explanation.push(child_support_payments_math);
            monthly_income = monthly_income_minus_child_support;
        }

        explanation.push(`<span class="en">Gross Income:</span><span class="es">Ingreso Bruto:</span> <strong>$${monthly_income}</strong>`);

        return {
            'name': '<span class="en">Gross Income</span><span class="es">Ingreso Bruto</span>',
            'result': monthly_income,
            'explanation': explanation,
            'sort_order': 0,
            'type': 'income',
        };
    }
}