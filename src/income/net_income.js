import { StandardDeduction } from '../deductions/standard_deduction.js';
import { EarnedIncomeDeduction } from '../deductions/earned_income_deduction.js';
import { DependentCareDeduction } from '../deductions/dependent_care_deduction.js';
import { MedicalExpensesDeduction } from '../deductions/medical_expenses_deduction.js';
import { ShelterDeduction } from '../deductions/shelter_deduction.js';
import { ChildSupportPaymentsDeduction } from '../deductions/child_support_payments_deduction.js';

export class NetIncome {
    constructor(inputs) {
        this.target_year = inputs.target_year;
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.gross_income = inputs.gross_income;
        this.state_or_territory = inputs.state_or_territory;
        this.household_size = inputs.household_size;
        this.monthly_job_income = inputs.monthly_job_income;
        this.dependent_care_costs = inputs.dependent_care_costs;
        this.medical_expenses_for_elderly_or_disabled = inputs.medical_expenses_for_elderly_or_disabled;
        this.standard_medical_deduction = inputs.standard_medical_deduction;
        this.standard_medical_deduction_amount = inputs.standard_medical_deduction_amount;
        this.rent_or_mortgage = inputs.rent_or_mortgage;
        this.homeowners_insurance_and_taxes = inputs.homeowners_insurance_and_taxes;
        this.utility_electricity = inputs.utility_electricity;
        this.utility_gas = inputs.utility_gas;
        this.utility_heating = inputs.utility_heating;
        this.utility_phone = inputs.utility_phone;
        this.utility_sewage = inputs.utility_sewage;
        this.utility_trash = inputs.utility_trash;
        this.utility_water = inputs.utility_water;
        this.standard_utility_allowances = inputs.standard_utility_allowances;
        this.child_support_payments_treatment = inputs.child_support_payments_treatment;
        this.court_ordered_child_support_payments = inputs.court_ordered_child_support_payments;
        this.noneligible_monthly_income = inputs.noneligible_monthly_income;
        this.noneligible_proration = inputs.noneligible_proration;
    }

    calculate() {
        let explanation = [];
        const explanation_intro = (
            '<span class="en">Net income is equal to total gross monthly income, minus deductions.</span><span class="es">El ingreso neto es igual al total de los ingresos brutos mensuales, menos las deducciones.</span>'
        );
        explanation.push(explanation_intro);

        if (this.gross_income === 0) {
            return {
                'name': '<span class="en">Net Income</span><span class="es">Ingreso Neto</span>',
                'result': 0,
                'explanation': ['<span class="en">Since the household does not have income, net income is zero.</span><span class="es">Dado que el hogar no tiene ingresos, el ingreso neto es cero.</span>'],
                'sort_order': 1,
                'type': 'income',
            };
        }

        // Start with gross income
        const income_explanation = (
            `<span class="en">Let's start with total household income. This household's gross income is</span><span class="es">Empecemos con el ingreso total del hogar. El ingreso bruto de este hogar es</span> $${this.gross_income}.`
        );
        explanation.push(income_explanation);

        // Calculate deductions
        const standard_deduction = new StandardDeduction({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'target_year': this.target_year,
        }).calculate();

        const earned_income_deduction = new EarnedIncomeDeduction({
            'monthly_job_income': this.monthly_job_income,
            'noneligible_monthly_income': this.noneligible_monthly_income,
            'noneligible_proration' : this.noneligible_proration,
        }).calculate();

        const dependent_care_deduction = new DependentCareDeduction({
            'dependent_care_costs': this.dependent_care_costs
        }).calculate();

        const medical_expenses_deduction = new MedicalExpensesDeduction({
            'household_includes_elderly_or_disabled': this.household_includes_elderly_or_disabled,
            'medical_expenses_for_elderly_or_disabled': this.medical_expenses_for_elderly_or_disabled,
            'standard_medical_deduction': this.standard_medical_deduction,
            'standard_medical_deduction_amount': this.standard_medical_deduction_amount,
        }).calculate();

        const child_support_payments_deduction = new ChildSupportPaymentsDeduction({
            'child_support_payments_treatment': this.child_support_payments_treatment,
            'court_ordered_child_support_payments': this.court_ordered_child_support_payments,
        }).calculate();

        const deductions_before_shelter = [
            standard_deduction,
            earned_income_deduction,
            dependent_care_deduction,
            medical_expenses_deduction,
            child_support_payments_deduction,
        ];

        let total_deductions_before_shelter = 0;

        // Add up deduction amounts and add explanations to explanation array
        deductions_before_shelter.map((deduction) => {
            for (const deduction_explanation_graph of deduction['explanation']) {
                explanation.push(deduction_explanation_graph);
            }

            total_deductions_before_shelter += deduction['result'];
        });

        const adjusted_income_before_excess_shelter = (
            this.gross_income - total_deductions_before_shelter
        );

        const shelter_deduction_calculation = new ShelterDeduction({
            'target_year': this.target_year,
            'adjusted_income': adjusted_income_before_excess_shelter,
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'household_includes_elderly_or_disabled': this.household_includes_elderly_or_disabled,
            'rent_or_mortgage': this.rent_or_mortgage,
            'homeowners_insurance_and_taxes': this.homeowners_insurance_and_taxes,

            'utility_electricity': this.utility_electricity,
            'utility_gas': this.utility_gas,
            'utility_heating': this.utility_heating,
            'utility_phone': this.utility_phone,
            'utility_sewage': this.utility_sewage,
            'utility_trash': this.utility_trash,
            'utility_water': this.utility_water,
            'standard_utility_allowances': this.standard_utility_allowances,
        }).calculate();

        for (const explanation_graph of shelter_deduction_calculation['explanation']) {
            explanation.push(explanation_graph);
        }

        const shelter_deduction_result = shelter_deduction_calculation['result'];

        const total_deductions = total_deductions_before_shelter + shelter_deduction_result;

        const total_deductions_explanation = (
            `<span class="en">Next, we add all applicable deductions together. The total of all deductions is</span><span class="es">A continuación, añadiremos todas las deducciones aplicables juntas. El total de las deducciones es</span> <strong>$${total_deductions}</strong>.`
        );
        explanation.push(total_deductions_explanation);
        explanation.push('');

        const income_minus_deductions = this.gross_income - total_deductions;

        const result = (income_minus_deductions > 0)
            ? income_minus_deductions
            : 0;

        const calculation_explanation = (
            `<span class="en">Gross income (<strong>$${this.gross_income}</strong>) minus total deductions (<strong>$${total_deductions}</strong>) equals net income: <strong>$${result}.</strong></span><span class="es">Los ingresos brutos (<strong>$${this.gross_income}</strong>) menos las deducciones totales (<strong>$${total_deductions}</strong>) es igual a los ingresos netos: <strong>$${result}.</strong></span>`
        );
        explanation.push(calculation_explanation);

        return {
            'name': '<span class="en">Net Income</span><span class="es">Ingreso Neto</span>',
            'result': result,
            'explanation': explanation,
            'sort_order': 1,
            'type': 'income',
        };
    }
}