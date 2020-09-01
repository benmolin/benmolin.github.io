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

    'PA': {
        '2020':
        {
            // http://services.dpw.state.pa.us/oimpolicymanuals/snap/index.htm#t=512_Categorical_Eligibility%2F512_1_General_Policy.htm&rhsearch=income%20160&rhhlterm=income%20160&rhsyns=%20
            'uses_bbce': true,
            'resource_limit_non_elderly_or_disabled': null,
            'resource_limit_elderly_or_disabled': null,
            'has_resource_limit_elderly_or_disabled_income_twice_fpl': true,
            'gross_income_limit_factor': 1.60,
            // State deduction options:
            // 2020 Options: http://services.dpw.state.pa.us/oimpolicymanuals/snap/560_Income_Deductions/560_Appendix_A.htm?rhhlterm=standard%20medical%20deduction&rhsyns=%20
            'child_support_payments_treatment': 'DEDUCT',
            'standard_medical_deduction': false,
            'standard_medical_deduction_amount': null,
            'standard_medical_deduction_ceiling': null,
            'standard_utility_allowances': {
                'BASIC_LIMITED_ALLOWANCE': 308,
                'HEATING_AND_COOLING': 594,
                'PHONE': 33,
                'SINGLE_UTILITY_ALLOWANCE': 58,
            }
        }
    },
    'MD': {
        '2020':
        {
            'uses_bbce': true,
            'resource_limit_non_elderly_or_disabled': null,
            'resource_limit_elderly_or_disabled': null,
            'has_resource_limit_elderly_or_disabled_income_twice_fpl': false,
            'gross_income_limit_factor': 2.00,
        }
    },
    'IN': {
        '2020':
        {
            'uses_bbce': true,
            'resource_limit_non_elderly_or_disabled': 5000,
            'resource_limit_elderly_or_disabled': 5000,
            'has_resource_limit_elderly_or_disabled_income_twice_fpl': false,
            'gross_income_limit_factor': 1.30,
        }
    },
    'IL': {
        '2020': {
            // Broad-based categorical eligibility, resource and income limits:
            'uses_bbce': true,
            'resource_limit_non_elderly_or_disabled': null,
            'resource_limit_elderly_or_disabled': null,
            'has_resource_limit_elderly_or_disabled_income_twice_fpl': true,
            'gross_income_limit_factor': 1.65,
            // State deduction options:
            // https://www.dhs.state.il.us/OneNetLibrary/5/documents/WAG_25_03_02_uploads/2020_07_23_WAG_25_03_02_Final.pdf
            'child_support_payments_treatment': 'EXCLUDE',
            'standard_medical_deduction': true,
            'standard_medical_deduction_amount': 200,
            'standard_medical_deduction_ceiling': 200,
            'standard_utility_allowances': {
                'BASIC_LIMITED_ALLOWANCE': 328,
                'HEATING_AND_COOLING': 478,
                'PHONE': 30,
                'SINGLE_UTILITY_ALLOWANCE': 74
            }
        }
    },
    'VA': {
        '2020': {
            // Broad-based categorical eligibility:
            'uses_bbce': false,

            // State deduction options:
            'child_support_payments_treatment': 'EXCLUDE', // This matches materials provided by VPLC and VA DSS but not the latest USDA State Options Report
            'standard_medical_deduction': true,
            'standard_medical_deduction_amount': 200,
            'standard_medical_deduction_ceiling': 235,
            'standard_utility_allowances': {
                'HEATING_AND_COOLING': {
                    'below_four': 303,
                    'four_or_more': 379,
                }
            }
        }
    }
};
