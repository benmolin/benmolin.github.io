function setDefaultOne() {
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", true);
    $("#input__all_citizens_question_true").prop("checked", true);
    $('#monthly_job_income').val('1000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');
    $('#prescreener-form-submit').click();
};

function setDefaultTwo() {
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_true").prop("checked", true);
    $("#input__all_citizens_question_true").prop("checked", true);
    $('#monthly_job_income').val('1000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');
    $('#prescreener-form-submit').click();
};


