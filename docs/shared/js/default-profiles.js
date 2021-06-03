function setDefaultOne() {
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", true);
    $('#monthly_job_income').val('1000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');
    $("#input__all_citizens_true").prop("checked", true);
    $("#input__unemployment_benefits_false").prop("checked", true);
    $('#prescreener-form-submit').click();
};

var CURRENT_INPUTS = {};
var CURRENT_PROFILE = {};
CURRENT_PROFILE.session_id = Math.random().toString(36).substring(3);
CURRENT_PROFILE.datetime = new Date().toLocaleString();

function isTrue(v){
    return (urlParams.get(v) == 'true');
}

function isFalse(v){
    return (urlParams.get(v) == 'false');
}

// Prepop
$(document).ready(function() {
    $('#household_size').val(urlParams.get('household_size'));
    $('#monthly_job_income').val(urlParams.get('monthly_job_income'));
    $('#monthly_non_job_income').val(urlParams.get('monthly_non_job_income')).trigger("input");

    // Special
    $('#ny_loc').val(urlParams.get('ny_loc'));
    $('#ak_loc').val(urlParams.get('ak_loc'));
    $('#ak_urban').val(urlParams.get('ak_urban'));

    $("#input__household_includes_dependent_child_true").prop("checked", isTrue('household_includes_dependent_child'));
    $("#input__household_includes_dependent_child_false").prop("checked", isFalse('household_includes_dependent_child'));


    $("#input__all_citizens_true").prop("checked", isTrue('all_citizens'));
    $("#input__all_citizens_false").prop("checked", isFalse('all_citizens'));
    if (isFalse('all_citizens')){
        $('#citizenship_info_box').removeClass('hidden');
        $('#noncitizen-questions').removeClass('hidden');


        $('#noncitizen_number').val(urlParams.get('noncitizen_number'));
        $('#noncitizen_lpr_plus_criteria_number').val(urlParams.get('noncitizen_lpr_plus_criteria_number')).trigger("input");
        $('#noneligible_monthly_income').val(urlParams.get('noneligible_monthly_income'));

        var NC_2 = $('#noncitizen_number').val();
        var NC_3 = $('#noncitizen_lpr_plus_criteria_number').val();
        if ((NC_2 != "") & (NC_3 != "")){
            
            var NC_NE = parseInt(NC_2) - parseInt(NC_3)

            // Show the next question if needed
            if (NC_NE > 0){
                $('#noncitizen-3').removeClass('hidden');
                $('#noncitizen-4').removeClass('hidden');
                $('#noncitizenship_info_box').removeClass('hidden');
                $('#noncitizen-3 .nc-helper').text(NC_NE + ' ');
                $('#noncitizen-4 .nc-helper').text(NC_NE + ' ');
            };

        }

    };

    $("#input__student_true").prop("checked", isTrue('student'));
    $("#input__student_false").prop("checked", isFalse('student'));
    if (isTrue('student')){
        $('#student_info_box').removeClass('hidden');
    };

    
    $("#input__unemployment_benefits_true").prop("checked", isTrue('unemployment_benefits'));
    $("#input__unemployment_benefits_false").prop("checked", isFalse('unemployment_benefits'));

    $('#resources').val(urlParams.get('resources'));

    $("#input__household_includes_elderly_or_disabled_true").prop("checked", isTrue('household_includes_elderly_or_disabled'));
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", isFalse('household_includes_elderly_or_disabled'));

    if ($("#input__household_includes_elderly_or_disabled_true").prop("checked")){
        $('#medical_expenses_for_elderly_or_disabled_question').removeClass('hidden');
    };

    $('#dependent_care_costs').val(urlParams.get('dependent_care_costs'));
    $('#medical_expenses_for_elderly_or_disabled').val(urlParams.get('medical_expenses_for_elderly_or_disabled'));
    $('#court_ordered_child_support_payments').val(urlParams.get('court_ordered_child_support_payments'));
    $('#rent_or_mortgage').val(urlParams.get('rent_or_mortgage'));
    $('#homeowners_insurance_and_taxes').val(urlParams.get('homeowners_insurance_and_taxes'));
    $('#utility_electricity').prop("checked", isTrue('utility_electricity'));
    $('#utility_gas').prop("checked", isTrue('utility_gas'));
    $('#utility_heating').prop("checked", isTrue('utility_heating'));
    $('#utility_phone').prop("checked", isTrue('utility_phone'));
    $('#utility_sewage').prop("checked", isTrue('utility_sewage'));
    $('#utility_trash').prop("checked", isTrue('utility_trash'));
    $('#utility_water').prop("checked", isTrue('utility_water'));


    // Make sure the state is changed at the end
    applyStateRegionOrSizeRules();

});