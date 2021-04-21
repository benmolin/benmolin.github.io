function showTestLimitsTables() {

    var stateAbbr = $('#prescreener-form').attr('data-state-or-territory');

    $('#gross-income-table').remove();
    $('#net-income-table').remove();
    $('#asset-limit-table').remove();

    if ($('#show_test_limits').prop('checked') == false) {
        return null;
    };

    // Get a table of income limits
    var GI_table = $('<table id="gross-income-table" class="table-auto mb-2 w-100 leading-relaxed tests-table">');
    var GI_row = $('<tr>').html('<th>' + stateAbbr.substring(0, 2) + ' Household Size</th><th>Gross Income Limit<th/>Gross Income Limit (Elderly/Disabled)');
    GI_table.append(GI_row);

    var NI_table = $('<table id="net-income-table" class="table-auto mb-2 w-100 leading-relaxed tests-table">');
    var NI_row = $('<tr>').html('<th>' + stateAbbr.substring(0, 2) + ' Household Size</th><th>Net Income Limit (All Households)');
    NI_table.append(NI_row);


    var AL_table = $('<table id="asset-limit-table" class="table-auto mb-2 w-100 leading-relaxed tests-table">');
    var AL_row = $('<tr>').html('<th>' + stateAbbr.substring(0, 2) + ' Household Size</th><th>Asset Limit<th/>Asset Limit (Elderly/Disabled)');
    AL_table.append(AL_row);


    for (var i = 1; i <= 5; i++) {

        var limit;
        var limit_elderly;
        for (var elderly in [0, 1]) {

            // Create the input json with client's data
            var inputs = {
                // Our inputs
                household_includes_elderly_or_disabled: elderly == 1,
                household_size: i,
                monthly_job_income: 50000,

                // Resources
                resources: 0,
                unemployment_benefits: false,

                // Constants here
                monthly_non_job_income: 0,
                state_or_territory: stateAbbr,
            };

            // Get response
            var response = new SnapAPI.SnapEstimateEntrypoint(inputs).calculate();

            // Gross Income Test
            var gross_income_explain = response['eligibility_factors'][3]['explanation'][1];
            var gross_income_limit = gross_income_explain.split(' ').pop();
            if (elderly == 1) {
                if (gross_income_explain.search('200% of the federal poverty') > 0) {
                    GI_limit_elderly = gross_income_explain.split('(')[1].split(')')[0] + ' (or meet $3500 asset limit)';
                } else {
                    GI_limit_elderly = gross_income_limit.replace('test.', 'None');
                };
            } else {
                GI_limit = gross_income_limit.replace('.', '');

            };

            // Net Income Test
            var net_income_explain = response['eligibility_factors'][4]['explanation'][1];
            var net_income_limit = net_income_explain.split(' ').pop().replace('.', '');


            // Asset Test
            var asset_explain = response['eligibility_factors'][5]['explanation'][0];
            var asset_limit = asset_explain.split(' ').pop().replace('.', '');

            if (elderly == 1) {
                if (asset_explain.search('200% of the federal poverty') > 0) {
                    AL_elderly = '$3500 (or meet gross income limit)';
                } else if (asset_explain.search('household is not held to an asset limit for SNAP eligibility') > 0) {
                    AL_elderly = 'None';
                } else {
                    AL_elderly = asset_limit;
                };
            } else {

                if (asset_explain.search('household is not held to an asset limit for SNAP eligibility') > 0) {
                    AL_limit = 'None';
                } else {
                    AL_limit = asset_limit;
                }
            };

        };


        var GI_row = $('<tr>').html('<td>' + i + '</td><td>' + GI_limit + '</td><td>' + GI_limit_elderly + '</td>');
        GI_table.append(GI_row);


        var NI_row = $('<tr>').html('<td>' + i + '</td><td>' + net_income_limit + '</td>');
        NI_table.append(NI_row);


        var AL_row = $('<tr>').html('<td>' + i + '</td><td>' + AL_limit + '</td><td>' + AL_elderly + '</td>');
        AL_table.append(AL_row);

    };
    $('#test-tables').append(GI_table);
    $('#test-tables').append(NI_table);
    $('#test-tables').append(AL_table);
};
