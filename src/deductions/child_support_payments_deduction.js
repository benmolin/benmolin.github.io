export class ChildSupportPaymentsDeduction {
    constructor(inputs) {
        this.child_support_payments_treatment = inputs.child_support_payments_treatment;
        this.court_ordered_child_support_payments = inputs.court_ordered_child_support_payments;
    }

    calculate() {
        if (this.child_support_payments_treatment !== 'DEDUCT') {
            return {
                'result': 0,
                'explanation': [
                    '<span class="en">In this state, court-ordered child support payments are excluded from gross income instead of deducted.</span><span class="es">En este estado, los pagos de manutención ordenados por la corte se cuentan como una exclusión de los ingresos brutos.</span>'
                ]
            };
        }

        if (this.court_ordered_child_support_payments === 0) {
            return {
                'result': 0,
                'explanation': [
                    '<span class="en">This household does not make monthly court-ordered child support payments, so the child-support payment deduction does not apply.</span><span class="es">Este hogar no hace pagos mensuales de manutención de hijos ordenados por la corte, por lo que la deducción de pagos de manutención de hijos no aplica.</span>'
                ]
            };
        }

        return {
            'result': this.court_ordered_child_support_payments,
            'explanation': [
                `<span class="en">Next, we deduct the monthly cost of court-ordered child support payments: $${this.court_ordered_child_support_payments}.</span><span class="es">A continuación, deducimos el costo mensual de los pagos de manutención de hijos ordenados por la corte: $${this.court_ordered_child_support_payments}.</span>`
            ]
        };
    }

}
