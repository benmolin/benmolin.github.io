// This test runs through all 50 states to make sure the prescreener works
function test() {

    var res;

    // Set some default information
    $('#household_size').val('2');
    $("#input__household_includes_elderly_or_disabled_false").prop("checked", true);
    $("#input__all_citizens_question_true").prop("checked", true);
    $('#monthly_job_income').val('1000');
    $('#monthly_non_job_income').val('0');
    $('#resources').val('0');

    for (var i = 0; i < states.length; i++) {
        var state_key = states[i][1];
        console.log(state_key);

        // Change state
        $('#prescreener-form').attr('data-state-or-territory', state_key);
        $('#prescreener-form-submit').click();

    }

    return "done!";
};