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

export const STATE_OPTIONS /*: StateOptions */ = {
    "AK_C_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_N_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_NW_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SC_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SE_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SW_U": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_C_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_N_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_NW_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SC_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SE_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SW_R1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_C_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_N_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_NW_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SC_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SE_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK_SW_R2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AR_HH1_3": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AR_HH4_X": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "AK": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
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
    "CO": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "CT": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "DE": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "undefined": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.75,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
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
    "GA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH1": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH2": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH3": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH4": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH5": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH6": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH7": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH8": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH9": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH10": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH11": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "GU_HH12_X": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH1": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH2": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH3": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH_4_5": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH_6": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "HI_HH_7_X": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "ID": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
            "child_support_payments_treatment": "EXCLUDE",
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
    "IA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.6,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "KS": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "KY": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "LA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "ME": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
    "MA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "MI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": 15000,
            "resource_limit_elderly_or_disabled": 15000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "MN": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "MS": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "MO": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "MT": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
    "NV": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NH_DC_T": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NH_DC_F": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NJ": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NM": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": "DEDUCT",
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": 340,
                "BASIC_LIMITED_ALLOWANCE": 136,
                "ELECTRICITY": 0,
                "GAS": 0,
                "WATER": 0,
                "SEWAGE": 0,
                "TRASH": 0,
                "PHONE": 44
            }
        }
    },
    "NY_NAS_DC": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_NYC_DC": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_ONY_DC": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_NAS_EI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_NYC_EI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_ONY_EI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.5,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_NAS_XX": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_NYC_XX": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NY_ONY_XX": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NC_HH1": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NC_HH2": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NC_HH3": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NC_HH4": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "NC_HH5_X": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "ND": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "OH": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "OK": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "OR": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
    "RI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "SC": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.3,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "SD": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH1": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH2": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH3": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH4": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH5": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH6": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH7": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH8": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH9": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TN_HH10_X": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "TX": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.65,
            "resource_limit_non_elderly_or_disabled": 5000,
            "resource_limit_elderly_or_disabled": 5000,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "UT": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "VT": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 1.85,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
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
    },
    "WA": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "WV": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": true,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "WI": {
        "2020": {
            "uses_bbce": true,
            "gross_income_limit_factor": 2,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": false,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    },
    "WY": {
        "2020": {
            "uses_bbce": false,
            "gross_income_limit_factor": null,
            "resource_limit_non_elderly_or_disabled": null,
            "resource_limit_elderly_or_disabled": null,
            "has_resource_limit_elderly_or_disabled_income_twice_fpl": null,
            "child_support_payments_treatment": null,
            "standard_medical_deduction": false,
            "standard_medical_deduction_amount": null,
            "standard_medical_deduction_ceiling": null,
            "standard_utility_allowances": {
                "HEATING_AND_COOLING": null,
                "BASIC_LIMITED_ALLOWANCE": null,
                "ELECTRICITY": null,
                "GAS": null,
                "WATER": null,
                "SEWAGE": null,
                "TRASH": null,
                "PHONE": null
            }
        }
    }
};