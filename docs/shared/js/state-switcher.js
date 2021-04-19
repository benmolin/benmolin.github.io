// States
var states = [
    ['Alabama', 'AL', 'Alabamian'],
    ['Alaska', 'AK_C_U', 'Alaskan'],
    ['Alaska', 'AK_N_U', 'Alaskan'],
    ['Alaska', 'AK_NW_U', 'Alaskan'],
    ['Alaska', 'AK_SC_U', 'Alaskan'],
    ['Alaska', 'AK_SE_U', 'Alaskan'],
    ['Alaska', 'AK_SW_U', 'Alaskan'],
    ['Alaska', 'AK_C_R1', 'Alaskan'],
    ['Alaska', 'AK_N_R1', 'Alaskan'],
    ['Alaska', 'AK_NW_R1', 'Alaskan'],
    ['Alaska', 'AK_SC_R1', 'Alaskan'],
    ['Alaska', 'AK_SE_R1', 'Alaskan'],
    ['Alaska', 'AK_SW_R1', 'Alaskan'],
    ['Alaska', 'AK_C_R2', 'Alaskan'],
    ['Alaska', 'AK_N_R2', 'Alaskan'],
    ['Alaska', 'AK_NW_R2', 'Alaskan'],
    ['Alaska', 'AK_SC_R2', 'Alaskan'],
    ['Alaska', 'AK_SE_R2', 'Alaskan'],
    ['Alaska', 'AK_SW_R2', 'Alaskan'],
    ['Arizona', 'AZ_HH1_3', 'Arizonan'],
    ['Arizona', 'AZ_HH4_X', 'Arizonan'],
    ['Arkansas', 'AR', 'Arkansan'],
    ['California', 'CA', 'Californian'],
    ['Colorado', 'CO', 'Coloradan'],
    ['Connecticut', 'CT', 'Connecticuter'],
    ['Delaware', 'DE', 'Delawarean'],
    ['District of Columbia', 'DC', 'Washingtonian'],
    ['Florida', 'FL', 'Floridian'],
    ['Georgia', 'GA', 'Georgian'],
    ['Guam', 'GU_HH1', 'Guamanian'],
    ['Guam', 'GU_HH2', 'Guamanian'],
    ['Guam', 'GU_HH3', 'Guamanian'],
    ['Guam', 'GU_HH4', 'Guamanian'],
    ['Guam', 'GU_HH5', 'Guamanian'],
    ['Guam', 'GU_HH6', 'Guamanian'],
    ['Guam', 'GU_HH7', 'Guamanian'],
    ['Guam', 'GU_HH8', 'Guamanian'],
    ['Guam', 'GU_HH9', 'Guamanian'],
    ['Guam', 'GU_HH10', 'Guamanian'],
    ['Guam', 'GU_HH11', 'Guamanian'],
    ['Guam', 'GU_HH12_X', 'Guamanian'],
    ['Hawaii', 'HI_HH1', 'Hawaiian'],
    ['Hawaii', 'HI_HH2', 'Hawaiian'],
    ['Hawaii', 'HI_HH3', 'Hawaiian'],
    ['Hawaii', 'HI_HH_4_5', 'Hawaiian'],
    ['Hawaii', 'HI_HH_6', 'Hawaiian'],
    ['Hawaii', 'HI_HH_7_X', 'Hawaiian'],
    ['Idaho', 'ID', 'Idahoan'],
    ['Illinois', 'IL', 'Illinoisan'],
    ['Indiana', 'IN', 'Indianian'],
    ['Iowa', 'IA', 'Iowan'],
    ['Kansas', 'KS', 'Kansan'],
    ['Kentucky', 'KY', 'Kentuckian'],
    ['Louisiana', 'LA', 'Louisianian'],
    ['Maine', 'ME', 'Mainer'],
    ['Maryland', 'MD', 'Marylander'],
    ['Massachusetts', 'MA', 'Massachusettsan'],
    ['Michigan', 'MI', 'Michigander'],
    ['Minnesota', 'MN', 'Minnesotan'],
    ['Mississippi', 'MS', 'Mississippian'],
    ['Missouri', 'MO', 'Missourian'],
    ['Montana', 'MT', 'Montanan'],
    ['Nebraska', 'NE', 'Nebraskan'],
    ['Nevada', 'NV', 'Nevadan'],
    ['New Hampshire', 'NH_DC_T', 'New Hampshirite'],
    ['New Hampshire', 'NH_DC_F', 'New Hampshirite'],
    ['New Jersey', 'NJ', 'New Jerseyan'],
    ['New Mexico', 'NM', 'New Mexican'],
    ['New York', 'NY_NAS_DC', 'New Yorker'],
    ['New York', 'NY_NYC_DC', 'New Yorker'],
    ['New York', 'NY_ONY_DC', 'New Yorker'],
    ['New York', 'NY_NAS_EI', 'New Yorker'],
    ['New York', 'NY_NYC_EI', 'New Yorker'],
    ['New York', 'NY_ONY_EI', 'New Yorker'],
    ['New York', 'NY_NAS_XX', 'New Yorker'],
    ['New York', 'NY_NYC_XX', 'New Yorker'],
    ['New York', 'NY_ONY_XX', 'New Yorker'],
    ['North Carolina', 'NC_HH1', 'North Carolinian'],
    ['North Carolina', 'NC_HH2', 'North Carolinian'],
    ['North Carolina', 'NC_HH3', 'North Carolinian'],
    ['North Carolina', 'NC_HH4', 'North Carolinian'],
    ['North Carolina', 'NC_HH5_X', 'North Carolinian'],
    ['North Dakota', 'ND', 'North Dakotan'],
    ['Ohio', 'OH', 'Ohioan'],
    ['Oklahoma', 'OK', 'Oklahoman'],
    ['Oregon', 'OR', 'Oregonian'],
    ['Pennsylvania', 'PA', 'Pennsylvanian'],
    ['Rhode Island', 'RI', 'Rhode Islander'],
    ['South Carolina', 'SC', 'South Carolinian'],
    ['South Dakota', 'SD', 'South Dakotan'],
    ['Tennessee', 'TN_HH1', 'Tennessean'],
    ['Tennessee', 'TN_HH2', 'Tennessean'],
    ['Tennessee', 'TN_HH3', 'Tennessean'],
    ['Tennessee', 'TN_HH4', 'Tennessean'],
    ['Tennessee', 'TN_HH5', 'Tennessean'],
    ['Tennessee', 'TN_HH6', 'Tennessean'],
    ['Tennessee', 'TN_HH7', 'Tennessean'],
    ['Tennessee', 'TN_HH8', 'Tennessean'],
    ['Tennessee', 'TN_HH9', 'Tennessean'],
    ['Tennessee', 'TN_HH10_X', 'Tennessean'],
    ['Texas', 'TX', 'Texan'],
    ['Utah', 'UT', 'Utahn'],
    ['Vermont', 'VT', 'Vermonter'],
    ['Virgin Islands', 'VI', ' Virgin Islander'],
    ['Virginia', 'VA_HH1_3', 'Virginian'],
    ['Virginia', 'VA_HH4_X', 'Virginian'],
    ['Washington', 'WA', 'Washingtonian'],
    ['West Virginia', 'WV', 'West Virginian'],
    ['Wisconsin', 'WI', 'Wisconsinite'],
    ['Wyoming', 'WY', 'Wyomingite'],
];

function switchStateOnPage(stateAbbr) {

    $('#prescreener-form').attr('data-state-or-territory', stateAbbr); // in the form
    applyStateRegionOrSizeRules(stateAbbr);

    // Get the long name
    for (var i = 0; i < states.length; i++) {
        if (states[i][1].substring(0, 2) == stateAbbr) {
            var stateFull = states[i][0];
            var stateDemonym = states[i][2];
            var fullSupport = true;
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
    HAS_DEPENDENT_CHILD,
    NY_AREA, // NYC (NYC), Nassau + Suffolk (NAS), Other NYC (ONY) 
    AK_AREA, // Cental (C), Northern (N), Northwest (NW), SouthCentral (SC), SouthEast (SE), SouthWest (SW)
    AK_URBAN // Urban (U), Rural 1 (R1), Rural II (R2)
) {

    // Fix for IE
    if(HAS_DEPENDENT_CHILD === undefined) {HAS_DEPENDENT_CHILD = false;}
    if(NY_AREA === undefined) {NY_AREA = 'NYC';}
    if(AK_AREA === undefined) {AK_AREA = 'C';}
    if(AK_URBAN === undefined) {AK_URBAN = 'U';}

    $('#household_includes_dependent_child_field').addClass('d-none')

    // AK
    if (['AK'].indexOf(stateAbbr) > -1) {
        $('#ak_loc_field').removeClass('d-none');
        if ($('#ak_loc').val() != '') {
            AK_AREA = $('#ak_loc').val();
        };

        $('#ak_urban_field').removeClass('d-none');
        if ($('#ak_urban').val() != '') {
            AK_URBAN = $('#ak_urban').val();
        };
        return stateAbbr + '_' + AK_AREA + '_' + AK_URBAN;
    } else {
        $('#ak_loc_field').addClass('d-none');
        $('#ak_urban_field').addClass('d-none');
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
        $('#ny_loc_field').removeClass('d-none');
        if ($('#ny_loc').val() != '') {
            NY_AREA = $('#ny_loc').val();
        };
        var HAS_EARNED_INCOME = parseInt($('#monthly_job_income').val()) > 0;
        if (HAS_DEPENDENT_CHILD) {
            return 'NY_' + NY_AREA + '_DC';
        } else if (HAS_EARNED_INCOME) {
            return 'NY_' + NY_AREA + '_EI';
        } else {
            return 'NY_' + NY_AREA + '_XX';
        };
    } else {
        $('#ny_loc_field').addClass('d-none');
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

$('#monthly_non_job_income').on('input',function(e){
    if (($('#monthly_non_job_income').val() != 0) & ($('#monthly_non_job_income').val() != '')){

        // If it currently is hidden, remove the input check
        if ($("#unemployment_benefits_field").hasClass("d-none")){

            $("#input__unemployment_benefits_true").prop('checked', false); 
            $("#input__unemployment_benefits_false").prop('checked', false); 
        };

        // Show the field
        $('#unemployment_benefits_field').removeClass('d-none');


    }else{
        $('#unemployment_benefits_field').addClass('d-none');
        $("#input__unemployment_benefits_true").prop('checked', false); 
        $("#input__unemployment_benefits_false").prop('checked', true); 
    };
});

// Show medical deductions list
var MEDICAL_DEDUCTION_LIST_VISIBLE = false;
$('#medical-deduction-list-button').on('click', function () {

    if (MEDICAL_DEDUCTION_LIST_VISIBLE == false){
        $('#medical-deduction-list').removeClass('hidden');
        MEDICAL_DEDUCTION_LIST_VISIBLE = true;
        $('#medical-deduction-list-button').text('Hide examples.')
    }else{
        $('#medical-deduction-list').addClass('hidden');
        MEDICAL_DEDUCTION_LIST_VISIBLE = false;
        $('#medical-deduction-list-button').text('Show examples.')
    };

});