// @flow strict

/*::
type StateOptions = {
    [State]: StateYearOption;
}

type StateYearOption = {
    '2021': IndividualStateOption;
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
    standard_utility_allowances: {};
}
*/

export const STATE_OPTIONS /*: StateOptions */ = {
    "AL": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 393,
                "BASIC_LIMITED_ALLOWANCE": 381,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 41
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "AK_C_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 397,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 100,
                "GAS": 120,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 39,
                "PHONE": 34
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_N_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 324,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 295,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 84,
                "PHONE": 24
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_NW_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 850,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 158,
                "GAS": 512,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 23,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SC_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 511,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 145,
                "GAS": 170,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 47,
                "PHONE": 23
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SE_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 407,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 88,
                "GAS": 151,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 27,
                "PHONE": 21
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SW_U": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 809,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 218,
                "GAS": 438,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 13,
                "PHONE": 20
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_C_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 397,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 100,
                "GAS": 120,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 39,
                "PHONE": 34
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_N_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 324,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 295,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 84,
                "PHONE": 24
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_NW_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 850,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 158,
                "GAS": 512,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 23,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SC_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 511,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 145,
                "GAS": 170,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 47,
                "PHONE": 23
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SE_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 407,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 88,
                "GAS": 151,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 27,
                "PHONE": 21
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SW_R1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 809,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 218,
                "GAS": 438,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 13,
                "PHONE": 20
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_C_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 397,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 100,
                "GAS": 120,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 39,
                "PHONE": 34
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_N_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 324,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 295,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 84,
                "PHONE": 24
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_NW_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 850,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 158,
                "GAS": 512,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 23,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SC_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 511,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 145,
                "GAS": 170,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 47,
                "PHONE": 23
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SE_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 407,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 88,
                "GAS": 151,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 27,
                "PHONE": 21
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AK_SW_R2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 809,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 218,
                "GAS": 438,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 13,
                "PHONE": 20
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "AZ_HH1_3": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 295,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 41
            },
            "covid": true,
            "unemployment": "7/10/2021"
        }
    },
    "AZ_HH4_X": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 399,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 41
            },
            "covid": true,
            "unemployment": "7/10/2021"
        }
    },
    "AR": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 283,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 50
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "CA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 120,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 438,
                "BASIC_LIMITED_ALLOWANCE": 139,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 18
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "CO": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 165,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 486,
                "BASIC_LIMITED_ALLOWANCE": 310,
                "ELECTRICITY": 58,
                "GAS": 58,
                "WATER": 58,
                "SEWAGE": 58,
                "TRASH": 58,
                "PHONE": 79
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "CT": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 736,
                "BASIC_LIMITED_ALLOWANCE": 324,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "DE": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 407,
                "BASIC_LIMITED_ALLOWANCE": 282,
                "ELECTRICITY": 70,
                "GAS": 70,
                "WATER": 70,
                "SEWAGE": 70,
                "TRASH": 70,
                "PHONE": 36
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "DC": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 310,
                "BASIC_LIMITED_ALLOWANCE": 281,
                "ELECTRICITY": 71,
                "GAS": 71,
                "WATER": 71,
                "SEWAGE": 71,
                "TRASH": 71,
                "PHONE": 69
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "FL": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 370,
                "BASIC_LIMITED_ALLOWANCE": 293,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 48
            },
            "covid": true,
            "unemployment": "6/27/2021"
        }
    },
    "GA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 367,
                "BASIC_LIMITED_ALLOWANCE": 323,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 47
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "GU_HH1": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 133,
                "GAS": 30,
                "WATER": 38,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH2": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 153,
                "GAS": 30,
                "WATER": 50,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH3": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 153,
                "GAS": 30,
                "WATER": 50,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH4": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 183,
                "GAS": 60,
                "WATER": 69,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH5": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 207,
                "GAS": 60,
                "WATER": 85,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH6": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 237,
                "GAS": 60,
                "WATER": 111,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH7": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 269,
                "GAS": 90,
                "WATER": 136,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH8": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 281,
                "GAS": 90,
                "WATER": 150,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH9": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 301,
                "GAS": 90,
                "WATER": 171,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH10": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 301,
                "GAS": 90,
                "WATER": 171,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH11": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 309,
                "GAS": 90,
                "WATER": 178,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "GU_HH12_X": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 309,
                "GAS": 90,
                "WATER": 178,
                "SEWAGE": 28,
                "TRASH": 30,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": null
        }
    },
    "HI_HH1": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 220,
                "GAS": 0,
                "WATER": 46,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "HI_HH2": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 240,
                "GAS": 0,
                "WATER": 51,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "HI_HH3": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 276,
                "GAS": 0,
                "WATER": 57,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "HI_HH_4_5": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 342,
                "GAS": 0,
                "WATER": 67,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "HI_HH_6": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 402,
                "GAS": 0,
                "WATER": 77,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "HI_HH_7_X": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 455,
                "GAS": 0,
                "WATER": 92,
                "SEWAGE": 92,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "ID": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 144,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 352,
                "BASIC_LIMITED_ALLOWANCE": 292,
                "ELECTRICITY": 128,
                "GAS": 128,
                "WATER": 128,
                "SEWAGE": 128,
                "TRASH": 128,
                "PHONE": 37
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "IL": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 496,
                "BASIC_LIMITED_ALLOWANCE": 356,
                "ELECTRICITY": 81,
                "GAS": 81,
                "WATER": 81,
                "SEWAGE": 81,
                "TRASH": 81,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "IN": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 412,
                "BASIC_LIMITED_ALLOWANCE": 250,
                "ELECTRICITY": 55,
                "GAS": 55,
                "WATER": 55,
                "SEWAGE": 55,
                "TRASH": 55,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "IA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.6,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 110,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 496,
                "BASIC_LIMITED_ALLOWANCE": 316,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 29
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "KS": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 140,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 359,
                "BASIC_LIMITED_ALLOWANCE": 246,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 35
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "KY": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 329,
                "BASIC_LIMITED_ALLOWANCE": 281,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 45
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "LA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 350,
                "BASIC_LIMITED_ALLOWANCE": 193,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 46
            },
            "covid": true,
            "unemployment": "7/31/2021"
        }
    },
    "ME": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 782,
                "BASIC_LIMITED_ALLOWANCE": 264,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 45
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "MD": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 392,
                "BASIC_LIMITED_ALLOWANCE": 240,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 40
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "MA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 155,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 646,
                "BASIC_LIMITED_ALLOWANCE": 396,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 45
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "MI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": 15000,
            "resource_limit_elderly_or_disabled": 15000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 547,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 126,
                "GAS": 36,
                "WATER": 97,
                "SEWAGE": 97,
                "TRASH": 23,
                "PHONE": 29
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "MN": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 496,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 154,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 56
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "MS": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 277,
                "BASIC_LIMITED_ALLOWANCE": 203,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 34
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "MO": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 170,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 404,
                "BASIC_LIMITED_ALLOWANCE": 319,
                "ELECTRICITY": 131,
                "GAS": 131,
                "WATER": 131,
                "SEWAGE": 131,
                "TRASH": 131,
                "PHONE": 65
            },
            "covid": true,
            "unemployment": "6/12/2021"
        }
    },
    "MT": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 563,
                "BASIC_LIMITED_ALLOWANCE": 203,
                "ELECTRICITY": 171,
                "GAS": 171,
                "WATER": 171,
                "SEWAGE": 171,
                "TRASH": 171,
                "PHONE": 32
            },
            "covid": true,
            "unemployment": "6/27/2021"
        }
    },
    "NE": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 25000,
            "resource_limit_elderly_or_disabled": 25000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 491,
                "BASIC_LIMITED_ALLOWANCE": 257,
                "ELECTRICITY": 52,
                "GAS": 52,
                "WATER": 52,
                "SEWAGE": 52,
                "TRASH": 52,
                "PHONE": 46
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "NV": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 275,
                "BASIC_LIMITED_ALLOWANCE": 233,
                "ELECTRICITY": 52,
                "GAS": 52,
                "WATER": 52,
                "SEWAGE": 52,
                "TRASH": 52,
                "PHONE": 25
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NH_DC_T": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 701,
                "BASIC_LIMITED_ALLOWANCE": 256,
                "ELECTRICITY": 150,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "NH_DC_F": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 701,
                "BASIC_LIMITED_ALLOWANCE": 256,
                "ELECTRICITY": 150,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "NJ": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 548,
                "BASIC_LIMITED_ALLOWANCE": 338,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 29
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NM": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 348,
                "BASIC_LIMITED_ALLOWANCE": 140,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 48
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NAS_DC": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 744,
                "BASIC_LIMITED_ALLOWANCE": 292,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NYC_DC": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 801,
                "BASIC_LIMITED_ALLOWANCE": 316,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_ONY_DC": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 661,
                "BASIC_LIMITED_ALLOWANCE": 268,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NAS_EI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 744,
                "BASIC_LIMITED_ALLOWANCE": 292,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NYC_EI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 801,
                "BASIC_LIMITED_ALLOWANCE": 316,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_ONY_EI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 661,
                "BASIC_LIMITED_ALLOWANCE": 268,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NAS_XX": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 744,
                "BASIC_LIMITED_ALLOWANCE": 292,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_NYC_XX": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 801,
                "BASIC_LIMITED_ALLOWANCE": 316,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NY_ONY_XX": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 661,
                "BASIC_LIMITED_ALLOWANCE": 268,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 30
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NC_HH1": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 440,
                "BASIC_LIMITED_ALLOWANCE": 263,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NC_HH2": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 483,
                "BASIC_LIMITED_ALLOWANCE": 289,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NC_HH3": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 531,
                "BASIC_LIMITED_ALLOWANCE": 318,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NC_HH4": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 579,
                "BASIC_LIMITED_ALLOWANCE": 347,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "NC_HH5_X": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 631,
                "BASIC_LIMITED_ALLOWANCE": 378,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "ND": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 165,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 606,
                "BASIC_LIMITED_ALLOWANCE": 236,
                "ELECTRICITY": 204,
                "GAS": 204,
                "WATER": 204,
                "SEWAGE": 204,
                "TRASH": 204,
                "PHONE": 32
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "OH": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 553,
                "BASIC_LIMITED_ALLOWANCE": 362,
                "ELECTRICITY": 80,
                "GAS": 80,
                "WATER": 80,
                "SEWAGE": 80,
                "TRASH": 80,
                "PHONE": 40
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "OK": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 341,
                "BASIC_LIMITED_ALLOWANCE": 293,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 48
            },
            "covid": true,
            "unemployment": "6/27/2021"
        }
    },
    "OR": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 170,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 442,
                "BASIC_LIMITED_ALLOWANCE": 341,
                "ELECTRICITY": 55,
                "GAS": 55,
                "WATER": 55,
                "SEWAGE": 55,
                "TRASH": 55,
                "PHONE": 68
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "PA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.6,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 594,
                "BASIC_LIMITED_ALLOWANCE": 308,
                "ELECTRICITY": 59,
                "GAS": 59,
                "WATER": 59,
                "SEWAGE": 59,
                "TRASH": 59,
                "PHONE": 33
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "RI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 141,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 636,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 23
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "SC": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 170,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 302,
                "BASIC_LIMITED_ALLOWANCE": 215,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 25
            },
            "covid": true,
            "unemployment": "6/30/2021"
        }
    },
    "SD": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 165,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 752,
                "BASIC_LIMITED_ALLOWANCE": 211,
                "ELECTRICITY": 87,
                "GAS": 87,
                "WATER": 87,
                "SEWAGE": 87,
                "TRASH": 87,
                "PHONE": 48
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "TN_HH1": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 317,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH2": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 328,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH3": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 341,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH4": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 353,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH5": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 364,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH6": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 376,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH7": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 387,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH8": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 399,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH9": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 413,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TN_HH10_X": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 423,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true,
            "unemployment": "7/3/2021"
        }
    },
    "TX": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 137,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 360,
                "BASIC_LIMITED_ALLOWANCE": 331,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 38
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "UT": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 386,
                "BASIC_LIMITED_ALLOWANCE": 310,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 74
            },
            "covid": true,
            "unemployment": "6/26/2021"
        }
    },
    "VT": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 138,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 822,
                "BASIC_LIMITED_ALLOWANCE": 235,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 36
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "VI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.75,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 0,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 36
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "VA_HH1_3": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 302,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "VA_HH4_X": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 377,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "WA": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "EXCLUDE",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 449,
                "BASIC_LIMITED_ALLOWANCE": 352,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 59
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "WV": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 428,
                "BASIC_LIMITED_ALLOWANCE": 281,
                "ELECTRICITY": 76,
                "GAS": 76,
                "WATER": 76,
                "SEWAGE": 76,
                "TRASH": 76,
                "PHONE": 76
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    },
    "WI": {
        "2021": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 462,
                "BASIC_LIMITED_ALLOWANCE": 320,
                "ELECTRICITY": 141,
                "GAS": 37,
                "WATER": 90,
                "SEWAGE": 90,
                "TRASH": 23,
                "PHONE": 29
            },
            "covid": true,
            "unemployment": "9/6/2021"
        }
    },
    "WY": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 399,
                "BASIC_LIMITED_ALLOWANCE": 281,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 53
            },
            "covid": true,
            "unemployment": "6/19/2021"
        }
    }
};