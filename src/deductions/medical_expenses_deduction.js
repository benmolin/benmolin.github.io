export class MedicalExpensesDeduction {
    // Calculates medical expenses deduction for households that include a member
    // who is over 60 years old, blind, or disabled.

    constructor(inputs) {
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.medical_expenses_for_elderly_or_disabled = inputs.medical_expenses_for_elderly_or_disabled;
        this.standard_medical_deduction = inputs.standard_medical_deduction;
        this.standard_medical_deduction_amount = inputs.standard_medical_deduction_amount;
    }

    calculate() {
        if (this.standard_medical_deduction) {
            this.standard_medical_deduction_ceiling = this.standard_medical_deduction_amount + 35;
        }

        const explanation = [
            '<span class="en">Next, deduct monthly medical expenses for elderly or disabled household members beyond $35.</span><span class="es">A continuación, deducimos los gastos médicos mensuales para los miembros del hogar ancianos o con discapacidad por encima de $35.</span>'
        ];

        if (!this.household_includes_elderly_or_disabled) {
            explanation.push(
                '<span class="en">In this case, there are no elderly or disabled members of the household, so the medical expenses deduction does not apply.</span><span class="es">En este caso, no hay miembros ancianos o con discapacidades en la familia, por lo que la deducción de gastos médicos no aplica.</span>'
            );

            return {
                'result': 0,
                'explanation': explanation,
            };
        }

        if (this.medical_expenses_for_elderly_or_disabled == 0) {
            explanation.push(
                '<span class="en">In this case, there are no monthly medical expenses to deduct.</span><span class="es">En este caso, no hay gastos médicos mensuales que deducir.</span>'
            );

            return {
                'result': 0,
                'explanation': explanation,
            };
        }

        if (35 >= this.medical_expenses_for_elderly_or_disabled) {
            explanation.push(
                '<span class="en">In this case, medical expenses are below the $35 monthly threshold for deduction.</span><span class="es">En este caso, los gastos médicos están por debajo del umbral de $35 mensuales para la deducción.</span>'
            );

            return {
                'result': 0,
                'explanation': explanation,
            };
        }

        // State that does not use a Standard Medical Deduction
        if (!this.standard_medical_deduction) {
            const medical_expenses_deduction = this.medical_expenses_for_elderly_or_disabled - 35;
            explanation.push(
                '<span class="en">The medical expenses deduction is equal to monthly medical expenses beyond $35.</span><span class="es">La deducción de los gastos médicos es igual a los gastos médicos mensuales por encima de $35.</span>'
            );

            explanation.push('');

            explanation.push(
                `$${this.medical_expenses_for_elderly_or_disabled} - $35 = $${medical_expenses_deduction} <span class="en">medical expenses deduction</span><span class="es">deducción de los gastos médicos</span>`
            );

            return {
                'result': medical_expenses_deduction,
                'explanation': explanation
            };
        }

        // State that uses a Standard Medical Deduction
        const expenses_above_ceiling = (
            this.medical_expenses_for_elderly_or_disabled > this.standard_medical_deduction_ceiling
        );

        if (expenses_above_ceiling) {
            const medical_expenses_deduction = this.medical_expenses_for_elderly_or_disabled - 35;

            explanation.push(
                `<span class="en">Medical expenses are greater than the Standard Medical Deduction maximum amount of $${this.standard_medical_deduction_ceiling}. In this case, the full medical expense amount after $35 can be deducted, which comes to $${medical_expenses_deduction}.</span><span class="es">Los gastos médicos son mayores que la cantidad máxima de deducción médica estándar de $${this.standard_medical_deduction_ceiling}. En este caso, la cantidad total de gastos médicos después de $35 puede ser deducida, la cual viene a ser $${medical_expenses_deduction}.</span> `
            );

            return {
                'result': medical_expenses_deduction,
                'explanation': explanation
            };
        } else {
            explanation.push(
                `<span class="en">This state has a Standard Medical Deduction amount of</span><span class="es">Este estado tiene una cantidad de deducción médica estándar de</span> $${this.standard_medical_deduction_amount}. `
            );
            return {
                'result': this.standard_medical_deduction_amount,
                'explanation': explanation
            };
        }
    }
}