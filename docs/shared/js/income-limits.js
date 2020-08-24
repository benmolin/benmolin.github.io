function showIncomeTable() {

    $('#gross-income-table').remove();

    // Get a table of income limits
    var table = $('<table id="gross-income-table" class="table-auto mb-2 w-100 leading-relaxed">');
    var row = $('<tr>').html('<th>' + stateAbbr + ' Household Size</th><th>Gross Income Limit<th/>Gross Income Limit (Elderly/Disabled)');
    table.append(row);
    for (var i = 1; i <= 5; i++) {

        var limit;
        var limit_elderly;
        for (var elderly in [0, 1]) {

            // Create the input json with client's data
            var inputs = {
                // Our inputs
                household_includes_elderly_or_disabled: elderly == 1,
                household_size: i,
                monthly_job_income: 1000,

                // TODO, add resources
                resources: 0,

                // Constants here
                monthly_non_job_income: 0,
                state_or_territory: stateAbbr,
            };

            // Get response
            var response = new SnapAPI.SnapEstimateEntrypoint(inputs).calculate();
            console.log(response);
            var gross_income_limit = response['eligibility_factors'][3]['explanation'][1].split(' ').pop();
            if (elderly == 1) {
                limit_elderly = gross_income_limit;
            } else {
                limit = gross_income_limit;

            };
        };


        var row = $('<tr>').html('<td>' + i + '</td><td>' + limit + '</td><td>' + limit_elderly + '</td>');
        table.append(row);

    };
    $('#gross-income-limit-table').append(table);
};
