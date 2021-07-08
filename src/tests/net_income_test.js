export class NetIncomeTest {
    constructor(inputs) {
        this.net_income = inputs.net_income;
        this.net_monthly_income_limit = inputs.net_monthly_income_limit;
    }

    calculate() {
        const below_net_income_limit = this.net_monthly_income_limit > this.net_income;

        const explanation = [];
        const explanation_intro = (
            '<span class="en">To be eligible for SNAP, a household\'s net income needs to be below the net monthly income limit.</span><span class="es">Para ser elegible para SNAP, el ingreso neto de un hogar tiene que estar por debajo del límite del ingreso neto mensual.</span>'
        );
        explanation.push(explanation_intro);

        const net_monthly_income_limit_explanation = (
            `<span class="en">The net monthly income limit is</span><span class="es">El límite de ingreso neto mensual es</span> $${this.net_monthly_income_limit}.`
        );
        explanation.push(net_monthly_income_limit_explanation);

        const result_in_words = (below_net_income_limit)
            ? 'passes'
            : 'does not meet';

        const result_in_words_es = (below_net_income_limit)
            ? 'pasa'
            : 'no cumple con';


        const result_explanation = (
            `<span class="en">Since the household net income (gross income minus deductions for expenses) is $${this.net_income}, this household <strong>${result_in_words}</strong> the net income test.</span><span class="es">Dado que el ingreso neto del hogar (ingreso bruto menos deducciones por gastos) es de $${this.net_income}, este hogar <strong>${result_in_words_es}</strong> la prueba de ingreso neto.</span>`
        );
        explanation.push(result_explanation);

        return {
            'name': '<span class="en">Net Income Test</span><span class="es">Prueba de Ingreso Neto</span>',
            'result': below_net_income_limit,
            'explanation': explanation,
            'sort_order': 3,
            'type': 'test'
        };
    }
}

