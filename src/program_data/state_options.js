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
                "HEATING_AND_COOLING": 374,
                "BASIC_LIMITED_ALLOWANCE": 357,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 39
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 0,
                "PHONE": 34
            },
            "covid": true
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
                "HEATING_AND_COOLING": 624,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 0,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 0,
                "PHONE": 24
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 0,
                "PHONE": 23
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 0,
                "PHONE": 21
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 0,
                "PHONE": 20
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 0,
                "PHONE": 34
            },
            "covid": true
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
                "HEATING_AND_COOLING": 624,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 0,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 0,
                "PHONE": 24
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 0,
                "PHONE": 23
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 0,
                "PHONE": 21
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 0,
                "PHONE": 20
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 51,
                "SEWAGE": 53,
                "TRASH": 0,
                "PHONE": 34
            },
            "covid": true
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
                "HEATING_AND_COOLING": 624,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 149,
                "GAS": 0,
                "WATER": 33,
                "SEWAGE": 39,
                "TRASH": 0,
                "PHONE": 24
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 68,
                "SEWAGE": 58,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 55,
                "SEWAGE": 71,
                "TRASH": 0,
                "PHONE": 23
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 46,
                "SEWAGE": 74,
                "TRASH": 0,
                "PHONE": 21
            },
            "covid": true
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
                "GAS": 0,
                "WATER": 58,
                "SEWAGE": 62,
                "TRASH": 0,
                "PHONE": 20
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 284,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 50
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 417,
                "BASIC_LIMITED_ALLOWANCE": 289,
                "ELECTRICITY": 78,
                "GAS": 78,
                "WATER": 78,
                "SEWAGE": 78,
                "TRASH": 78,
                "PHONE": 37
            },
            "covid": true
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
                "HEATING_AND_COOLING": 331,
                "BASIC_LIMITED_ALLOWANCE": 276,
                "ELECTRICITY": 69,
                "GAS": 69,
                "WATER": 69,
                "SEWAGE": 69,
                "TRASH": 69,
                "PHONE": 69
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 378,
                "BASIC_LIMITED_ALLOWANCE": 329,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 43
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 193,
                "GAS": 0,
                "WATER": 45,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 209,
                "GAS": 0,
                "WATER": 50,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 240,
                "GAS": 0,
                "WATER": 55,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 297,
                "GAS": 0,
                "WATER": 65,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 349,
                "GAS": 0,
                "WATER": 75,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "ELECTRICITY": 394,
                "GAS": 0,
                "WATER": 90,
                "SEWAGE": 88,
                "TRASH": 0,
                "PHONE": 27
            },
            "covid": true
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
                "HEATING_AND_COOLING": 368,
                "BASIC_LIMITED_ALLOWANCE": 303,
                "ELECTRICITY": 134,
                "GAS": 134,
                "WATER": 134,
                "SEWAGE": 134,
                "TRASH": 134,
                "PHONE": 35
            },
            "covid": true
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
                "HEATING_AND_COOLING": 478,
                "BASIC_LIMITED_ALLOWANCE": 328,
                "ELECTRICITY": 74,
                "GAS": 74,
                "WATER": 74,
                "SEWAGE": 74,
                "TRASH": 74,
                "PHONE": 30
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 357,
                "BASIC_LIMITED_ALLOWANCE": 243,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 36
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 356,
                "BASIC_LIMITED_ALLOWANCE": 196,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 43
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 543,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 135,
                "GAS": 44,
                "WATER": 91,
                "SEWAGE": 91,
                "TRASH": 19,
                "PHONE": 31
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 278,
                "BASIC_LIMITED_ALLOWANCE": 206,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 31
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 546,
                "BASIC_LIMITED_ALLOWANCE": 198,
                "ELECTRICITY": 167,
                "GAS": 167,
                "WATER": 167,
                "SEWAGE": 167,
                "TRASH": 167,
                "PHONE": 31
            },
            "covid": true
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
                "HEATING_AND_COOLING": 490,
                "BASIC_LIMITED_ALLOWANCE": 256,
                "ELECTRICITY": 52,
                "GAS": 52,
                "WATER": 52,
                "SEWAGE": 52,
                "TRASH": 52,
                "PHONE": 46
            },
            "covid": false
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
                "HEATING_AND_COOLING": 285,
                "BASIC_LIMITED_ALLOWANCE": 252,
                "ELECTRICITY": 56,
                "GAS": 56,
                "WATER": 56,
                "SEWAGE": 56,
                "TRASH": 56,
                "PHONE": 29
            },
            "covid": true
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
                "HEATING_AND_COOLING": 718,
                "BASIC_LIMITED_ALLOWANCE": 262,
                "ELECTRICITY": 154,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 28
            },
            "covid": true
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
                "HEATING_AND_COOLING": 718,
                "BASIC_LIMITED_ALLOWANCE": 262,
                "ELECTRICITY": 154,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            },
            "covid": true
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
                "HEATING_AND_COOLING": 542,
                "BASIC_LIMITED_ALLOWANCE": 316,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 29
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 616,
                "BASIC_LIMITED_ALLOWANCE": 236,
                "ELECTRICITY": 204,
                "GAS": 204,
                "WATER": 204,
                "SEWAGE": 204,
                "TRASH": 204,
                "PHONE": 32
            },
            "covid": true
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
                "HEATING_AND_COOLING": 548,
                "BASIC_LIMITED_ALLOWANCE": 355,
                "ELECTRICITY": 79,
                "GAS": 79,
                "WATER": 79,
                "SEWAGE": 79,
                "TRASH": 79,
                "PHONE": 38
            },
            "covid": true
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
                "HEATING_AND_COOLING": 355,
                "BASIC_LIMITED_ALLOWANCE": 305,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 48
            },
            "covid": true
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
                "ELECTRICITY": 68,
                "GAS": 68,
                "WATER": 68,
                "SEWAGE": 68,
                "TRASH": 68,
                "PHONE": 55
            },
            "covid": true
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
            "covid": false
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
                "HEATING_AND_COOLING": 638,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 23
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 732,
                "BASIC_LIMITED_ALLOWANCE": 206,
                "ELECTRICITY": 85,
                "GAS": 85,
                "WATER": 85,
                "SEWAGE": 85,
                "TRASH": 85,
                "PHONE": 49
            },
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 360,
                "BASIC_LIMITED_ALLOWANCE": 283,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 64
            },
            "covid": true
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
            "covid": true
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
                "PHONE": 32
            },
            "covid": true
        }
    },
    "VA_HH1_3": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 303,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            },
            "covid": true
        }
    },
    "VA_HH4_X": {
        "2021": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": true,
            "standard_medical_deduction_amount": 200,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 379,
                "BASIC_LIMITED_ALLOWANCE": 0,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 61
            },
            "covid": true
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
                "HEATING_AND_COOLING": 430,
                "BASIC_LIMITED_ALLOWANCE": 336,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 58
            },
            "covid": true
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
            "covid": true
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
                "HEATING_AND_COOLING": 456,
                "BASIC_LIMITED_ALLOWANCE": 318,
                "ELECTRICITY": 141,
                "GAS": 36,
                "WATER": 87,
                "SEWAGE": 0,
                "TRASH": 22,
                "PHONE": 30
            },
            "covid": true
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
            "covid": true
        }
    }
};