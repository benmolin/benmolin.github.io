// States
var states = [
    ['Alabama', 'AL', 'Alabamian', false],
    ['Alaska', 'AK_C_U', 'Alaskan', false],
    ['Alaska', 'AK_N_U', 'Alaskan', false],
    ['Alaska', 'AK_NW_U', 'Alaskan', false],
    ['Alaska', 'AK_SC_U', 'Alaskan', false],
    ['Alaska', 'AK_SE_U', 'Alaskan', false],
    ['Alaska', 'AK_SW_U', 'Alaskan', false],
    ['Alaska', 'AK_C_R1', 'Alaskan', false],
    ['Alaska', 'AK_N_R1', 'Alaskan', false],
    ['Alaska', 'AK_NW_R1', 'Alaskan', false],
    ['Alaska', 'AK_SC_R1', 'Alaskan', false],
    ['Alaska', 'AK_SE_R1', 'Alaskan', false],
    ['Alaska', 'AK_SW_R1', 'Alaskan', false],
    ['Alaska', 'AK_C_R2', 'Alaskan', false],
    ['Alaska', 'AK_N_R2', 'Alaskan', false],
    ['Alaska', 'AK_NW_R2', 'Alaskan', false],
    ['Alaska', 'AK_SC_R2', 'Alaskan', false],
    ['Alaska', 'AK_SE_R2', 'Alaskan', false],
    ['Alaska', 'AK_SW_R2', 'Alaskan', false],
    ['Arizona', 'AZ_HH1_3', 'Arizonan', false],
    ['Arizona', 'AZ_HH4_X', 'Arizonan', false],
    ['Arkansas', 'AR', 'Arkansan', false],
    ['California', 'CA', 'Californian', true],
    ['Colorado', 'CO', 'Coloradan', false],
    ['Connecticut', 'CT', 'Connecticuter', false],
    ['Delaware', 'DE', 'Delawarean', false],
    ['District Of Columbia', 'DC', 'Washingtonian', false],
    ['Florida', 'FL', 'Floridian', true],
    ['Georgia', 'GA', 'Georgian', false],
    ['Guam', 'GU_HH1', 'Guamanian', false],
    ['Guam', 'GU_HH2', 'Guamanian', false],
    ['Guam', 'GU_HH3', 'Guamanian', false],
    ['Guam', 'GU_HH4', 'Guamanian', false],
    ['Guam', 'GU_HH5', 'Guamanian', false],
    ['Guam', 'GU_HH6', 'Guamanian', false],
    ['Guam', 'GU_HH7', 'Guamanian', false],
    ['Guam', 'GU_HH8', 'Guamanian', false],
    ['Guam', 'GU_HH9', 'Guamanian', false],
    ['Guam', 'GU_HH10', 'Guamanian', false],
    ['Guam', 'GU_HH11', 'Guamanian', false],
    ['Guam', 'GU_HH12_X', 'Guamanian', false],
    ['Hawaii', 'HI_HH1', 'Hawaiian', false],
    ['Hawaii', 'HI_HH2', 'Hawaiian', false],
    ['Hawaii', 'HI_HH3', 'Hawaiian', false],
    ['Hawaii', 'HI_HH_4_5', 'Hawaiian', false],
    ['Hawaii', 'HI_HH_6', 'Hawaiian', false],
    ['Hawaii', 'HI_HH_7_X', 'Hawaiian', false],
    ['Idaho', 'ID', 'Idahoan', false],
    ['Illinois', 'IL', 'Illinoisan', true],
    ['Indiana', 'IN', 'Indianian', true],
    ['Iowa', 'IA', 'Iowan', false],
    ['Kansas', 'KS', 'Kansan', false],
    ['Kentucky', 'KY', 'Kentuckian', false],
    ['Louisiana', 'LA', 'Louisianian', false],
    ['Maine', 'ME', 'Mainer', false],
    ['Maryland', 'MD', 'Marylander', true],
    ['Massachusetts', 'MA', 'Massachusettsan', false],
    ['Michigan', 'MI', 'Michigander', false],
    ['Minnesota', 'MN', 'Minnesotan', false],
    ['Mississippi', 'MS', 'Mississippian', false],
    ['Missouri', 'MO', 'Missourian', false],
    ['Montana', 'MT', 'Montanan', false],
    ['Nebraska', 'NE', 'Nebraskan', true],
    ['Nevada', 'NV', 'Nevadan', false],
    ['New Hampshire', 'NH_DC_T', 'New Hampshirite', false],
    ['New Hampshire', 'NH_DC_F', 'New Hampshirite', false],
    ['New Jersey', 'NJ', 'New Jerseyan', false],
    ['New Mexico', 'NM', 'New Mexican', true],
    ['New York', 'NY_NAS_DC', 'New Yorker', false],
    ['New York', 'NY_NYC_DC', 'New Yorker', false],
    ['New York', 'NY_ONY_DC', 'New Yorker', false],
    ['New York', 'NY_NAS_EI', 'New Yorker', false],
    ['New York', 'NY_NYC_EI', 'New Yorker', false],
    ['New York', 'NY_ONY_EI', 'New Yorker', false],
    ['New York', 'NY_NAS_XX', 'New Yorker', false],
    ['New York', 'NY_NYC_XX', 'New Yorker', false],
    ['New York', 'NY_ONY_XX', 'New Yorker', false],
    ['North Carolina', 'NC_HH1', 'North Carolinian', false],
    ['North Carolina', 'NC_HH2', 'North Carolinian', false],
    ['North Carolina', 'NC_HH3', 'North Carolinian', false],
    ['North Carolina', 'NC_HH4', 'North Carolinian', false],
    ['North Carolina', 'NC_HH5_X', 'North Carolinian', false],
    ['North Dakota', 'ND', 'North Dakotan', false],
    ['Ohio', 'OH', 'Ohioan', false],
    ['Oklahoma', 'OK', 'Oklahoman', false],
    ['Oregon', 'OR', 'Oregonian', false],
    ['Pennsylvania', 'PA', 'Pennsylvanian', true],
    ['Rhode Island', 'RI', 'Rhode Islander', false],
    ['South Carolina', 'SC', 'South Carolinian', false],
    ['South Dakota', 'SD', 'South Dakotan', false],
    ['Tennessee', 'TN_HH1', 'Tennessean', false],
    ['Tennessee', 'TN_HH2', 'Tennessean', false],
    ['Tennessee', 'TN_HH3', 'Tennessean', false],
    ['Tennessee', 'TN_HH4', 'Tennessean', false],
    ['Tennessee', 'TN_HH5', 'Tennessean', false],
    ['Tennessee', 'TN_HH6', 'Tennessean', false],
    ['Tennessee', 'TN_HH7', 'Tennessean', false],
    ['Tennessee', 'TN_HH8', 'Tennessean', false],
    ['Tennessee', 'TN_HH9', 'Tennessean', false],
    ['Tennessee', 'TN_HH10_X', 'Tennessean', false],
    ['Texas', 'TX', 'Texan', false],
    ['Utah', 'UT', 'Utahn', false],
    ['Vermont', 'VT', 'Vermonter', false],
    ['Virgin Islands', 'VI', ' Virgin Islander', false],
    ['Virginia', 'VA_HH1_3', 'Virginian', true],
    ['Virginia', 'VA_HH4_X', 'Virginian', true],
    ['Washington', 'WA', 'Washingtonian', false],
    ['West Virginia', 'WV', 'West Virginian', false],
    ['Wisconsin', 'WI', 'Wisconsinite', false],
    ['Wyoming', 'WY', 'Wyomingite', false],
];

function switchStateOnPage(stateAbbr) {

    $('#prescreener-form').attr('data-state-or-territory', stateAbbr); // in the form
    applyStateRegionOrSizeRules(stateAbbr);

    // Get the long name
    for (var i = 0; i < states.length; i++) {
        if (states[i][1].substring(0, 2) == stateAbbr) {
            var stateFull = states[i][0];
            var stateDemonym = states[i][2];
            var fullSupport = states[i][3];
            break;
        };
    };

    // If full support, show not required questions
    if (fullSupport) {
        $('#non-required-questions').removeClass('d-none');
    } else {
        $('#non-required-questions').addClass('d-none');
    };

    // Change the state 
    $('title').text(stateFull + ' SNAP Screener'); // in the title
    $('#main .title').text(stateDemonym + 's, could you be eligible for help with your food budget?') // In the header
    $("#dev-state-change").val(stateAbbr);
};

// Dev state changer
$('#dev-state-change').on('change', function () {
    stateAbbr = this.value;

    applyStateRegionOrSizeRules();
    switchStateOnPage(this.value);
});

function applyStateRegionOrSizeRules() {

    // First, get current state
    var stateKey = $('#prescreener-form').attr('data-state-or-territory');
    var stateAbbr = stateKey.substring(0, 2)

    // Then, get household size
    var HH_SIZE = $('#household_size').val();
    if (HH_SIZE == "") {
        HH_SIZE = 1;
    };
    HH_SIZE = parseInt(HH_SIZE);

    // Get dependent children boolean
    var HAS_DEPENDENT_CHILD = $('#input__household_includes_dependent_child_true').is(':checked');


    // Special rules
    var stateKey = stateSpecialRules(stateAbbr, HH_SIZE, HAS_DEPENDENT_CHILD);
    $('#prescreener-form').attr('data-state-or-territory', stateKey);


    console.log(HH_SIZE, stateKey, stateAbbr);
    showTestLimitsTables();

};

// Apply state special rules
function stateSpecialRules(stateAbbr,
    HH_SIZE,
    HAS_DEPENDENT_CHILD = false,
    NY_AREA = 'NYC', // NYC (NYC), Nassau + Suffolk (NAS), Other NYC (ONY) 
    AK_AREA = 'C', // Cental (C), Northern (N), Northwest (NW), SouthCentral (SC), SouthEast (SE), SouthWest (SW)
    AK_URBAN = 'U', // Urban (U), Rural 1 (R1), Rural II (R2)
) {

    $('#household_includes_dependent_child_field').addClass('d-none')

    // AK
    if (['AK'].indexOf(stateAbbr) > -1) {
        return stateAbbr + '_' + AK_AREA + '_' + AK_URBAN;
    };
    // AZ, VA
    if (['AZ', 'VA'].indexOf(stateAbbr) > -1) {
        if (HH_SIZE <= 3) {
            return stateAbbr + '_HH1_3';
        } else {
            return stateAbbr + '_HH4_X';
        }
    };
    // GU
    if (['GU'].indexOf(stateAbbr) > -1) {
        if (HH_SIZE <= 11) {
            return stateAbbr + '_HH' + HH_SIZE;
        } else {
            return stateAbbr + '_HH12_X';
        }
    };
    // HI
    if (['HI'].indexOf(stateAbbr) > -1) {
        if (HH_SIZE <= 3) {
            return stateAbbr + '_HH' + HH_SIZE;
        } else if (HH_SIZE <= 5) {
            return stateAbbr + '_HH4_5';
        } else if (HH_SIZE == 6) {
            return stateAbbr + '_HH6';
        } else {
            return stateAbbr + '_HH7_X';
        }
    };
    // NH
    if (['NH'].indexOf(stateAbbr) > -1) {
        $('#household_includes_dependent_child_field').removeClass('d-none');
        if (HAS_DEPENDENT_CHILD) {
            return stateAbbr + '_DC_T';
        } else {
            return stateAbbr + '_DC_F';
        }
    };
    // NY
    if (['NY'].indexOf(stateAbbr) > -1) {
        $('#household_includes_dependent_child_field').removeClass('d-none');
        var HAS_EARNED_INCOME = parseInt($('#monthly_job_income').val()) > 0;
        if (HAS_DEPENDENT_CHILD) {
            return 'NY_' + NY_AREA + '_DC';
        } else if (HAS_EARNED_INCOME) {
            return 'NY_' + NY_AREA + '_EI';
        } else {
            return 'NY_' + NY_AREA + '_XX';
        };
    };
    // NC
    if (['NC'].indexOf(stateAbbr) > -1) {
        if (HH_SIZE <= 4) {
            return stateAbbr + '_HH' + HH_SIZE;
        } else {
            return stateAbbr + '_HH5_X';
        }
    };
    // TN
    if (['TN'].indexOf(stateAbbr) > -1) {
        if (HH_SIZE <= 9) {
            return stateAbbr + '_HH' + HH_SIZE;
        } else {
            return stateAbbr + '_HH10_X';
        }
    };

    return stateAbbr;
};


$('.effects-state-rules').on('change', function () {
    applyStateRegionOrSizeRules();
});