// @flow

import { STATE_OPTIONS } from './program_data/state_options.js';

import { NetIncome } from './income/net_income.js';
import { GrossIncome } from './income/gross_income.js';
import { NoncitizenCalc } from './income/noncitizen_calc.js';

import { GrossIncomeTest } from './tests/gross_income_test.js';
import { AssetTest } from './tests/asset_test.js';
import { NetIncomeTest } from './tests/net_income_test.js';

import { BenefitAmountEstimate } from './amount/benefit_amount_estimate.js';
import { FetchIncomeLimit } from './program_data_api/fetch_income_limit.js';

const DEFAULT_GROSS_INCOME_LIMIT_FACTOR = 1.3;
const DEFAULT_RESOURCE_LIMIT_ELDERLY_OR_DISABLED = 3500;
const DEFAULT_RESOURCE_LIMIT_NON_ELDERLY_OR_DISABLED = 2250;

/*::
interface SnapEstimateInputs {
    state_or_territory: State;
    monthly_job_income: number;
    monthly_non_job_income: number;
    household_size: number;
    household_includes_elderly_or_disabled: boolean;
    resources: number;
    dependent_care_costs?: ?number;
    medical_expenses_for_elderly_or_disabled?: ?number;
    rent_or_mortgage?: ?number;
    homeowners_insurance_and_taxes?: ?number;
    utility_electricity:  boolean;
    utility_gas:  boolean;
    utility_heating:  boolean;
    utility_phone:  boolean;
    utility_sewage:  boolean;
    utility_trash:  boolean;
    utility_water:  boolean;
    court_ordered_child_support_payments?: ?number;
    use_emergency_allotment: boolean;
    target_year: ?number;
    all_citizens = boolean;
    noncitizen_number = ?number;
    noncitizen_lpr_plus_criteria_number = ?number;
    noneligible_monthly_income = ?number;
}
*/

export class SnapEstimate {
    /*::
    // Inputs
    state_or_territory: string;
    monthly_job_income: number;
    monthly_non_job_income: number;
    household_size: number;
    household_includes_elderly_or_disabled: boolean;
    resources: number;
    dependent_care_costs: ?number;
    medical_expenses_for_elderly_or_disabled: ?number;
    court_ordered_child_support_payments: ?number;
    use_emergency_allotment: boolean;
    rent_or_mortgage: ?number;
    homeowners_insurance_and_taxes: ?number;
    utility_electricity:  boolean;
    utility_gas:  boolean;
    utility_heating:  boolean;
    utility_phone:  boolean;
    utility_sewage:  boolean;
    utility_trash:  boolean;
    utility_water:  boolean;
    target_year: ?number;
    all_citizens = boolean;
    noncitizen_number = ?number;
    noncitizen_lpr_plus_criteria_number = ?number;
    noneligible_monthly_income = ?number;

    // State Options
    state_options: Object;
    gross_income_limit_factor: number;
    resource_limit_elderly_or_disabled: number;
    resource_limit_elderly_or_disabled_income_twice_fpl: number;
    resource_limit_non_elderly_or_disabled: number;
    child_support_payments_treatment: string;
    net_monthly_income_limit: number;
    standard_medical_deduction: boolean;
    standard_medical_deduction_amount: number;
    standard_utility_allowances: Object;

    // Calculated
    gross_income_calculation: Object;
    net_income_calculation: Object;
    gross_income: number;
    net_income: number;

    // Outputs
    estimated_eligibility: boolean;
    estimated_monthly_benefit: number;
    emergency_allotment_estimated_benefit: ?number;
    */

    constructor(inputs /*: SnapEstimateInputs */) {
        // Inputs below have been validated in the higher-level
        // SnapEstimateEntrypoint class using ParseInputs.
        this.state_or_territory = inputs.state_or_territory;
        this.monthly_job_income = inputs.monthly_job_income;
        this.monthly_non_job_income = inputs.monthly_non_job_income;
        this.unemployment_benefits = inputs.unemployment_benefits;
        this.household_size = inputs.household_size;
        this.household_includes_elderly_or_disabled = inputs.household_includes_elderly_or_disabled;
        this.student = inputs.student;
        this.dependent_care_costs = inputs.dependent_care_costs;
        this.medical_expenses_for_elderly_or_disabled = inputs.medical_expenses_for_elderly_or_disabled;
        this.court_ordered_child_support_payments = inputs.court_ordered_child_support_payments;
        this.resources = inputs.resources;
        this.use_emergency_allotment = inputs.use_emergency_allotment;
        this.rent_or_mortgage = inputs.rent_or_mortgage;
        this.homeowners_insurance_and_taxes = inputs.homeowners_insurance_and_taxes;

        this.all_citizens = inputs.all_citizens;
        this.noncitizen_number = inputs.noncitizen_number;
        this.noncitizen_lpr_plus_criteria_number = inputs.noncitizen_lpr_plus_criteria_number;
        this.noneligible_monthly_income = inputs.noneligible_monthly_income;

        this.utility_electricity = inputs.utility_electricity;
        this.utility_gas = inputs.utility_gas;
        this.utility_heating = inputs.utility_heating;
        this.utility_phone = inputs.utility_phone;
        this.utility_sewage = inputs.utility_sewage;
        this.utility_trash = inputs.utility_trash;
        this.utility_water = inputs.utility_water;
        this.target_year = 2021;

        const state_options = STATE_OPTIONS[this.state_or_territory][this.target_year];
        this.covid = state_options.covid;
        this.uses_bbce = state_options.uses_bbce;
        const uses_bbce = state_options.uses_bbce;

        this.gross_income_limit_factor = (uses_bbce)
            ? state_options['gross_income_limit_factor']
            : DEFAULT_GROSS_INCOME_LIMIT_FACTOR;

        this.resource_limit_elderly_or_disabled = (uses_bbce)
            ? state_options['resource_limit_elderly_or_disabled']
            : DEFAULT_RESOURCE_LIMIT_ELDERLY_OR_DISABLED;

        this.resource_limit_elderly_or_disabled_income_twice_fpl = (uses_bbce)
            ? state_options['resource_limit_elderly_or_disabled_income_twice_fpl']
            : DEFAULT_RESOURCE_LIMIT_ELDERLY_OR_DISABLED;

        this.resource_limit_non_elderly_or_disabled = (uses_bbce)
            ? state_options['resource_limit_non_elderly_or_disabled']
            : DEFAULT_RESOURCE_LIMIT_NON_ELDERLY_OR_DISABLED;

        this.child_support_payments_treatment = state_options['child_support_payments_treatment'];
        this.standard_medical_deduction = state_options['standard_medical_deduction'];
        this.standard_medical_deduction_amount = state_options['standard_medical_deduction_amount'];
        this.standard_utility_allowances = state_options['standard_utility_allowances'];
        this.has_resource_limit_elderly_or_disabled_income_twice_fpl = state_options['has_resource_limit_elderly_or_disabled_income_twice_fpl'];

        this.net_monthly_income_limit = new FetchIncomeLimit({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size - (this.noncitizen_number - this.noncitizen_lpr_plus_criteria_number),
            'target_year': this.target_year,
        }).income_limit_lookup();
    }

    calculate() {

        // First, calculate non-citizen
        const noncitizen_calculation = this.calculate_noncitizen();
        this.noneligible_proration = noncitizen_calculation['noneligible_proration'];
        this.noneligible_number = noncitizen_calculation['noneligible_number'];
        this.household_size = this.household_size - this.noneligible_number;
        this.court_ordered_child_support_payments = Math.round(noncitizen_calculation['court_ordered_child_support_payments']);
        this.dependent_care_costs = Math.round(noncitizen_calculation['dependent_care_costs']);
        this.rent_or_mortgage = Math.round(noncitizen_calculation['rent_or_mortgage']);
        this.homeowners_insurance_and_taxes = Math.round(noncitizen_calculation['homeowners_insurance_and_taxes']);

        // The, calculate gross income
        const gross_income_calculation = this.calculate_gross_income();
        this.gross_income = gross_income_calculation['result'];

        // Then, net income
        const net_income_calculation = this.calculate_net_income();
        this.net_income = net_income_calculation['result'];

        // Set up and run eligibility tests
        const eligibility_tests = this.initialize_eligibility_tests();

        const eligibility_calculations/*: Array<Object> */ = eligibility_tests.map((eligibility_test) => {
            return eligibility_test.calculate();
        });

        const eligibility_results/*: Array<number> */ = eligibility_calculations.map((calculation) => {
            return calculation.result;
        });

        this.estimated_eligibility = eligibility_results.indexOf(false) === -1;

        // Calculate estimated benefit amount
        const benefit_amount_estimate = new BenefitAmountEstimate({
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'is_eligible': this.estimated_eligibility,
            'net_income': this.net_income,
            'use_emergency_allotment': (this.use_emergency_allotment || false),
            'target_year': this.target_year,
            'covid': this.covid,
        });

        const benefit_amount_calculation = benefit_amount_estimate.calculate();
        this.estimated_monthly_benefit = benefit_amount_calculation.result;
        this.emergency_allotment_estimated_benefit = benefit_amount_calculation.emergency_allotment_estimated_benefit;

        const eligibility_factors/*: Array<Array<string>> */ = [
            noncitizen_calculation,
            gross_income_calculation,
            net_income_calculation,
            benefit_amount_calculation,
        ].concat(eligibility_calculations);

        return {
            'status': 'OK',
            'estimated_monthly_benefit': this.estimated_monthly_benefit,
            'emergency_allotment_estimated_benefit': this.emergency_allotment_estimated_benefit, // If emergency allotments are in effect, a household may receive a higher benefit total. This value may be null if emergency allotments are not in effect.
            'estimated_eligibility': this.estimated_eligibility,
            'eligibility_factors': eligibility_factors,
        };
    }
    initialize_eligibility_tests() {
        return [
            new GrossIncomeTest({
                'state_or_territory': this.state_or_territory,
                'uses_bbce': this.uses_bbce,
                'household_size': this.household_size,
                'household_includes_elderly_or_disabled': this.household_includes_elderly_or_disabled,
                'resources': this.resources,
                'gross_income': this.gross_income,
                'net_monthly_income_limit': this.net_monthly_income_limit,
                'gross_income_limit_factor': this.gross_income_limit_factor,
                'has_resource_limit_elderly_or_disabled_income_twice_fpl': this.has_resource_limit_elderly_or_disabled_income_twice_fpl,
            }),
            new NetIncomeTest({
                'net_monthly_income_limit': this.net_monthly_income_limit,
                'net_income': this.net_income,
            }),
            new AssetTest({
                'state_or_territory': this.state_or_territory,
                'uses_bbce': this.uses_bbce,
                'household_size': this.household_size,
                'household_includes_elderly_or_disabled': this.household_includes_elderly_or_disabled,
                'net_monthly_income_limit': this.net_monthly_income_limit,
                'gross_income': this.gross_income,
                'resources': this.resources,
                'resource_limit_elderly_or_disabled': this.resource_limit_elderly_or_disabled,
                'resource_limit_non_elderly_or_disabled': this.resource_limit_non_elderly_or_disabled,
                'has_resource_limit_elderly_or_disabled_income_twice_fpl': this.has_resource_limit_elderly_or_disabled_income_twice_fpl
            })
        ];
    }

    calculate_noncitizen() {
        return new NoncitizenCalc({
            'household_size': this.household_size,
            'all_citizens': this.all_citizens,
            'noncitizen_number': this.noncitizen_number,
            'noncitizen_lpr_plus_criteria_number': this.noncitizen_lpr_plus_criteria_number,
            'noneligible_monthly_income' : this.noneligible_monthly_income,

            'medical_expenses_for_elderly_or_disabled' : this.medical_expenses_for_elderly_or_disabled,
            'court_ordered_child_support_payments' : this.court_ordered_child_support_payments,
            'dependent_care_costs' : this.dependent_care_costs,
            'rent_or_mortgage' : this.rent_or_mortgage,
            'homeowners_insurance_and_taxes' : this.homeowners_insurance_and_taxes,

        }).calculate();
    }

    calculate_gross_income() {
        return new GrossIncome({
            'monthly_job_income': this.monthly_job_income,
            'monthly_non_job_income': this.monthly_non_job_income,
            'court_ordered_child_support_payments': this.court_ordered_child_support_payments,
            'child_support_payments_treatment': this.child_support_payments_treatment,
            'unemployment_benefits' : this.unemployment_benefits,
            'noneligible_monthly_income' : this.noneligible_monthly_income,
            'noneligible_proration' : this.noneligible_proration,
        }).calculate();
    }

    calculate_net_income() {
        return new NetIncome({
            'target_year': this.target_year,
            'household_includes_elderly_or_disabled': this.household_includes_elderly_or_disabled,
            'gross_income': this.gross_income,
            'state_or_territory': this.state_or_territory,
            'household_size': this.household_size,
            'monthly_job_income': this.monthly_job_income,
            'dependent_care_costs': this.dependent_care_costs,
            'medical_expenses_for_elderly_or_disabled': this.medical_expenses_for_elderly_or_disabled,
            'standard_medical_deduction': this.standard_medical_deduction,
            'standard_medical_deduction_amount': this.standard_medical_deduction_amount,
            'rent_or_mortgage': this.rent_or_mortgage,
            'homeowners_insurance_and_taxes': this.homeowners_insurance_and_taxes,

            'utility_electricity': this.utility_electricity,
            'utility_gas': this.utility_gas,
            'utility_heating': this.utility_heating,
            'utility_phone': this.utility_phone,
            'utility_sewage': this.utility_sewage,
            'utility_trash': this.utility_trash,
            'utility_water': this.utility_water,

            'noneligible_monthly_income' : this.noneligible_monthly_income,
            'noneligible_proration' : this.noneligible_proration,

            'standard_utility_allowances': this.standard_utility_allowances,
            'child_support_payments_treatment': this.child_support_payments_treatment,
            'court_ordered_child_support_payments': this.court_ordered_child_support_payments,
        }).calculate();
    }
}

