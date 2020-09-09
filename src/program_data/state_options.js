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

    // BBCE Template
    // 'X1': {
    //     '2020': {
    //         // Broad-based categorical eligibility, resource and income limits:
    //         'uses_bbce': null,
    //         'resource_limit_non_elderly_or_disabled': null,
    //         'resource_limit_elderly_or_disabled': null,
    //         'has_resource_limit_elderly_or_disabled_income_twice_fpl': null,
    //         'gross_income_limit_factor': null,
    //         // State deduction options:
    //         'child_support_payments_treatment': 'null',
    //         'standard_medical_deduction': null,
    //         'standard_medical_deduction_amount': null,
    //         'standard_medical_deduction_ceiling': null,
    //         'standard_utility_allowances': {
    //             'HEATING_AND_COOLING': null,
    //             'BASIC_LIMITED_ALLOWANCE': null,
    //             'ELECTRICITY': null,
    //             'GAS': null,
    //             'WATER': null,
    //             'SEWAGE': null,
    //             'TRASH': null,
    //             'PHONE': null,
    //         }
    //     }
    // },

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
                'HEATING_AND_COOLING': 594,
                'BASIC_LIMITED_ALLOWANCE': 308,
                'ELECTRICITY': 58,
                'GAS': 58,
                'WATER': 58,
                'SEWAGE': 58,
                'TRASH': 58,
                'PHONE': 33,
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
            // https://fns-prod.azureedge.net/sites/default/files/snap/14-State-Options.pdf
            'child_support_payments_treatment': 'DEDUCT',
            'standard_medical_deduction': false,
            'standard_medical_deduction_amount': null,
            'standard_medical_deduction_ceiling': null,
            // http://www.dhr.state.md.us/documents/FIA/Action%20Transmittals/AT2020/AT%2020-09%20-%202020%20Decrease%20In%20SNAP%20Utility%20Allowances.pdf
            'standard_utility_allowances': {
                'HEATING_AND_COOLING': 392, // SUA
                'BASIC_LIMITED_ALLOWANCE': 240, // BUA/LUA
                'ELECTRICITY': 0,
                'GAS': 0,
                'WATER': 0,
                'SEWAGE': 0,
                'TRASH': 0,
                'PHONE': 40,
            }
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
            // State deduction options:
            // https://secure.in.gov/fssa/files/3000.pdf
            'child_support_payments_treatment': 'DEDUCT',
            // https://www.in.gov/fssa/dfr/3097.htm
            'standard_medical_deduction': null,
            'standard_medical_deduction_amount': null,
            'standard_medical_deduction_ceiling': null,
            // https://secure.in.gov/fssa/files/3000.pdf
            'standard_utility_allowances': {
                'HEATING_AND_COOLING': 412,
                'BASIC_LIMITED_ALLOWANCE': 250,
                'ELECTRICITY': 55,
                'GAS': 55,
                'WATER': 55,
                'SEWAGE': 55,
                'TRASH': 55,
                'PHONE': 31,
            }
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
                'HEATING_AND_COOLING': 478,
                'BASIC_LIMITED_ALLOWANCE': 328,
                'ELECTRICITY': 74,
                'GAS': 74,
                'WATER': 74,
                'SEWAGE': 74,
                'TRASH': 74,
                'PHONE': 30,
            }
        }
    },
    'VA': {
        '2020': {
            // Broad-based categorical eligibility:
            'uses_bbce': false,

            // State deduction options:
            'child_support_payments_treatment': 'EXCLUDE', // This matches materials provided by VPLC and VA DSS but not the latest USDA State Options Report
            // https://www.dss.virginia.gov/files/division/bp/fs/intro_page/income_limits/Income_Chart.pdf
            'standard_medical_deduction': true,
            'standard_medical_deduction_amount': 200,
            'standard_medical_deduction_ceiling': 235,
            'standard_utility_allowances': {
                'HEATING_AND_COOLING': {
                    'below_four': 303,
                    'four_or_more': 379,
                },
                'BASIC_LIMITED_ALLOWANCE': 0,
                'ELECTRICITY': 0,
                'GAS': 0,
                'WATER': 0,
                'SEWAGE': 0,
                'TRASH': 0,
                'PHONE': 61,
            }
        }
    },
};
