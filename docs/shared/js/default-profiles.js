function setDefaultOne() {
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", true);
    $('#monthly_job_income').val('1000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');
    $('#prescreener-form-submit').click();
};

function setDefaultTwo() {
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_true").prop("checked", true);
    $('#monthly_job_income').val('5000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');
    $('#prescreener-form-submit').click();
};

var CURRENT_PROFILE;

function isTrue(v){
    return (urlParams.get(v) == 'true');
}

// Prepop
$(document).ready(function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    $('#household_size').val(urlParams.get('household_size'));
    $('#monthly_job_income').val(urlParams.get('monthly_job_income'));
    $('#monthly_non_job_income').val(urlParams.get('monthly_non_job_income')).trigger("input");

    // Special
    $('#ny_loc').val(urlParams.get('ny_loc'));
    $('#ak_loc').val(urlParams.get('ak_loc'));
    $('#ak_urban').val(urlParams.get('ak_urban'));

    $("#input__household_includes_dependent_child_true").prop("checked", isTrue('household_includes_dependent_child'));
    $("#input__household_includes_dependent_child_false").prop("checked", !isTrue('household_includes_dependent_child'));

    
    $("#input__unemployment_benefits_true").prop("checked", isTrue('unemployment_benefits'));
    $("#input__unemployment_benefits_false").prop("checked", !isTrue('unemployment_benefits'));

    $('#resources').val(urlParams.get('resources'));

    $("#input__household_includes_elderly_or_disabled_true").prop("checked", isTrue('household_includes_elderly_or_disabled'));
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", !isTrue('household_includes_elderly_or_disabled'));

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