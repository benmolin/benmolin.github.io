// @flow strict

/*::
type StateOptions = {
    [State]: StateYearOption;
}

type StateYearOption = {
    '2020': IndividualStateOption;
}

type IndividualStateOption = {
    uses_bbce: boolean;
    has_resource_limit_elderly_or_disabled_income_twice_fpl: boolean;
    child_support_payments_treatment: string;
    gross_income_limit_factor?: number;
    resource_limit_elderly_or_disabled?: ?number;
    resource_limit_elderly_or_disabled_income_twice_fpl?: ?number;
    resource_limit_non_elderly_or_disabled?: ?number;
    child_support_payments_treatment: string;
    standard_medical_deduction: boolean;
    standard_medical_deduction_amount: number;
    standard_medical_deduction_ceiling: number;
    standard_utility_allowances: {};
}
*/

// DATA SOURCES:
//
// "Broad-Based Community Eligibility", USDA, last updated December 2019:
// https://fns-prod.azureedge.net/sites/default/files/resource-files/BBCE2019%28December%29.pdf
//
// "State Options Report", USDA, Options as of October 1, 2017:
//
// https://fns-prod.azureedge.net/sites/default/files/snap/14-State-Options.pdf
//
// "Standard Utility Allowances", USDA:
//
// https://www.fns.usda.gov/snap/eligibility/deduction/standard-utility-allowances

export const STATE_OPTIONS /*: StateOptions */ = {
    "CA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 120,
            "standard_medical_deduction_ceiling": 155,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 432,
                "BASIC_LIMITED_ALLOWANCE": 135,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 18
            }
        }
    },
    "FL": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 35,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 370,
                "BASIC_LIMITED_ALLOWANCE": 293,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 48
            }
        }
    },
    "IL": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_medical_deduction_ceiling": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 478,
                "BASIC_LIMITED_ALLOWANCE": 328,
                "ELECTRICITY": 74,
                "GAS": 74,
                "WATER": 74,
                "SEWAGE": 74,
                "TRASH": 74,
                "PHONE": 30
            }
        }
    },
    "IN": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 412,
                "BASIC_LIMITED_ALLOWANCE": 250,
                "ELECTRICITY": 55,
                "GAS": 55,
                "WATER": 55,
                "SEWAGE": 55,
                "TRASH": 55,
                "PHONE": 31
            }
        }
    },
    "MD": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 392,
                "BASIC_LIMITED_ALLOWANCE": 240,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 40
            }
        }
    },
    "NE": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 25000,
            "resource_limit_elderly_or_disabled": 25000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 490,
                "BASIC_LIMITED_ALLOWANCE": 256,
                "ELECTRICITY": 52,
                "GAS": 52,
                "WATER": 52,
                "SEWAGE": 52,
                "TRASH": 52,
                "PHONE": 46
            }
        }
    },
    "PA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.6,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 594,
                "BASIC_LIMITED_ALLOWANCE": 308,
                "ELECTRICITY": 58,
                "GAS": 58,
                "WATER": 58,
                "SEWAGE": 58,
                "TRASH": 58,
                "PHONE": 33
            }
        }
    },
    "VA_HH1_3": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_medical_deduction_ceiling": 235,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 303,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            }
        }
    },
    "VA_HH4_X": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_medical_deduction_ceiling": 235,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 379,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            }
        }
    }
};