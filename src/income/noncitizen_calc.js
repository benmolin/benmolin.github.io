export class NoncitizenCalc {
    constructor(inputs) {
        this.household_size = inputs.household_size;
        this.all_citizens = inputs.all_citizens;
        this.noncitizen_number = inputs.noncitizen_number;
        this.noncitizen_lpr_plus_criteria_number = inputs.noncitizen_lpr_plus_criteria_number;
        this.noneligible_monthly_income = inputs.noneligible_monthly_income;

        this.medical_expenses_for_elderly_or_disabled = inputs.medical_expenses_for_elderly_or_disabled;
        this.court_ordered_child_support_payments = inputs.court_ordered_child_support_payments;
        this.dependent_care_costs = inputs.dependent_care_costs;
        this.rent_or_mortgage = inputs.rent_or_mortgage;
        this.homeowners_insurance_and_taxes = inputs.homeowners_insurance_and_taxes;
    }

    calculate() {
        const explanation = [];

        const noncitizen_intro = (
            'Household members that are not eligible for SNAP based on their citizenship status are still included on the household\'s application. Ineligible non-citizens\' income and deductions will be prorated.'
        );
        explanation.push(noncitizen_intro);

        // ALL CITIZENS or non-citizen question not enabled
        if ((this.all_citizens == true) | (this.noncitizen_number == '')) {
            return {
                'name': 'Non-Citizen Calculations',
                'result': null,
                'noneligible_number' : 0,
                'noneligible_proration': null,
                'noneligible_proration_deductions': null,
                'court_ordered_child_support_payments': this.court_ordered_child_support_payments,
                'dependent_care_costs': this.dependent_care_costs,
                'rent_or_mortgage': this.rent_or_mortgage,
                'homeowners_insurance_and_taxes': this.homeowners_insurance_and_taxes,
                'explanation': explanation,
                'sort_order': 0,
                'type': 'income',
            };
        }
        
        
        const noneligible_number = this.noncitizen_number - this.noncitizen_lpr_plus_criteria_number;
        const eligible_number = this.household_size - noneligible_number;
        const noneligible_proration = (eligible_number  / this.household_size);
        const noneligible_proration_deductions = (eligible_number / this.household_size) + ((noneligible_number / this.household_size) * (eligible_number / this.household_size));
        const court_ordered_child_support_payments_adj = this.court_ordered_child_support_payments * noneligible_proration_deductions;
        const dependent_care_costs_adj = this.dependent_care_costs * noneligible_proration_deductions;
        const rent_or_mortgage_adj = this.rent_or_mortgage * noneligible_proration_deductions;
        const homeowners_insurance_and_taxes_adj = this.homeowners_insurance_and_taxes * noneligible_proration_deductions;

        if (noneligible_number == 0){
            const all_eligible_explanation = (
                'All non-citizen household members meet a status that allows them to be eligible for SNAP. No income or deduction prorations are needed.'
            );
            explanation.push(all_eligible_explanation);
        }else{
            const number_eligible_explanation = (
                `${eligible_number} of the ${this.household_size} household members are eligible for SNAP based on their citizenship status. To prorate income, we will multiply the amount earned by the ineligible members by ${Math.round(100 * noneligible_proration)}%.` 
            );
            explanation.push(number_eligible_explanation);        
            
            const proration_deductions_explanation = (
                `To simplify deductions, we will assume all household members evenly split expenses. We will multiply these expenses by a proration rate of ${Math.round(100 * noneligible_proration_deductions)}%. Adjusted amounts include:`
            );
            explanation.push(proration_deductions_explanation);  

            const proration_deductions_list_explanation = (
                `
                Court-Ordered Child Support Payments = $${this.court_ordered_child_support_payments} → $${Math.round(court_ordered_child_support_payments_adj)}<br>
                Dependent Care Costs = $${this.dependent_care_costs} → $${Math.round(dependent_care_costs_adj)}<br>
                Rent or Mortgage = $${this.rent_or_mortgage} → $${Math.round(rent_or_mortgage_adj)}<br>
                Homeowners Insurance or Taxes = $${this.homeowners_insurance_and_taxes} → $${Math.round(homeowners_insurance_and_taxes_adj)}<br>
                `
            );

            explanation.push(proration_deductions_list_explanation); 
            
            const resources_proration_explanation = (
                `Resources and assets of ineligible non-citizen household members are counted in full on the application. Only eligible household members count towards the household size used to determine maximum benefit amounts, so the adjusted household size is ${eligible_number} members.`
            );
            explanation.push(resources_proration_explanation);  
        };

        return {
            'name': 'Non-Citizen Calculations',
            'result': 1,
            'noneligible_number' : noneligible_number,
            'noneligible_proration': noneligible_proration,
            'noneligible_proration_deductions': noneligible_proration_deductions,
            'court_ordered_child_support_payments': court_ordered_child_support_payments_adj,
            'dependent_care_costs': dependent_care_costs_adj,
            'rent_or_mortgage': rent_or_mortgage_adj,
            'homeowners_insurance_and_taxes': homeowners_insurance_and_taxes_adj,
            'explanation': explanation,
            'sort_order': 0,
            'type': 'income',
        };
    }
}