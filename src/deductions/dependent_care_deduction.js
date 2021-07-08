export class DependentCareDeduction {
    constructor(inputs) {
        this.dependent_care_costs = inputs.dependent_care_costs;
    }

    calculate() {
        const explanation = [
            `<span class="en">Next, we deduct dependent care costs: $${this.dependent_care_costs}.</span><span class="es">A continuación, deducimos los costos de cuidado de los dependientes: $${this.dependent_care_costs}.</span>`
        ];

        return {
            'result': this.dependent_care_costs,
            'explanation': explanation
        };
    }
}
