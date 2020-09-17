// Global
var csv;
var validStates = [
    'CA',
    'FL',
    'IL',
    'IN',
    'MD',
    'NE',
    'PA',
    'VA',
];

// Get the CSV file when loaded
// https://stackoverflow.com/questions/34494032/loading-a-csv-file-into-an-html-table-using-javascript
var file = document.getElementById('csvUpload');
file.addEventListener('change', function () {
    var reader = new FileReader();
    reader.onload = function () {
        csv = reader.result;
        csv = formatCSV(csv);
        sendToSnapAPI(csv);
    };
    reader.readAsText(file.files[0]);
});

// Format the CSV by splitting lines
function formatCSV(csv) {
    console.log('CSV Entered:')
    console.log(csv);
    csv = csv.split('\n');
    for (var i = 0; i < csv.length; i++) {
        csv[i] = csv[i].split(',');
    };

    // Sometimes, the last row will be blank [""], so remove if so
    if (csv[csv.length - 1].length == 1) {
        csv.pop()
    };

    // Trim blank spaces in csv column names
    for (var i = 0; i < csv[0].length; i++) {
        csv[0][i] = $.trim(csv[0][i]);
    };

    console.log('\nFormatted CSV')
    console.log(csv);

    return csv;
}

// Function that takes the final CSV and downloads it to computer
// https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
function downloadCSV(csv, sampleData = false) {

    var csvContent = "data:text/csv;charset=utf-8,";
    for (var i = 0; i < csv.length; i++) {
        var row = csv[i].join(",");
        csvContent += row + "\n";
    };

    var encodedUri = encodeURI(csvContent);

    // Depending on whether we're working with sample data, download immediately
    if (sampleData) {
        window.open(encodedUri);
    } else {
        $('#upload-message').removeClass('d-none');
        document.getElementById('upload-message').innerHTML = "Success! Download or copy results below.";
        document.getElementById('download-button').onclick = function () { window.open(encodedUri) };
    };


};

// Convert to int ("$1,212.00" -> 1212)
function int(v) {
    v = v.split('.')[0]; // remove any decimals
    v = v.replace(/[^0-9]+/g, "");
    v = parseInt(v)
    return v
};

// Apply state special rules
function stateSpecialRules(stateAbbr, HH_SIZE) {
    // Special rules
    if (stateAbbr == 'VA') {
        if (HH_SIZE <= 3) {
            return 'VA_HH1_3';
        } else {
            return 'VA_HH4_X';
        };
    } else {
        return stateAbbr;
    };
};


// Function that compiles and sends data out to snap API
function sendToSnapAPI() {

    // Here we need to match the inputs to the CSV column names
    var loc_state = csv[0].indexOf("STATE");
    var loc_household_size = csv[0].indexOf("HH_SIZE");
    var loc_household_includes_elderly_or_disabled_1 = csv[0].indexOf("SENIOR_IN_HOUSEHOLD");
    var loc_household_includes_elderly_or_disabled_2 = csv[0].indexOf("DISABILITY_IN_HOUSEHOLD");
    var loc_monthly_job_income = csv[0].indexOf("MONTHLY_JOB_INCOME");

    // Check to see all variables are in list
    var columns = [
        'STATE',
        'HH_SIZE',
        'SENIOR_IN_HOUSEHOLD',
        'DISABILITY_IN_HOUSEHOLD',
        'MONTHLY_JOB_INCOME'
    ];
    for (var i = 0; i < columns.length; i++) {
        if (csv[0].indexOf(columns[i]) == -1) {
            $('#error-message').removeClass('d-none');
            document.getElementById('error-message').innerHTML = "Error, column missing: " + columns[i] + '. Refresh page to try again.';
            return false;
        }
    }

    // Here we need to define what "true" and "false" is in our boolean variables
    // Write down what the "true" option is
    var HIEOD_1_bool = 1;
    var HIEOD_2_bool = 1;


    var is_estimated_eligibility;
    var estimated_monthly_benefit;
    var GI_test;

    // New columns (add new to the bottom)
    var response_columns = [
        "estimated_eligibility",
        "estimated_monthly_benefit",
        "GI_test",
        "NI_test",
        "AL_test",
        "GI_amount",
        "NI_amount",
        "EXPLAIN_GI",
        "EXPLAIN_NI",
        "EXPLAIN_benefit",
        "EXPLAIN_GI_test",
        "EXPLAIN_NI_Test",
        "EXPLAIN_AL_Test",
    ];

    // Add new columns for snap eligibility (must be added in reverse order as above)
    for (var i = response_columns.length - 1; i >= 0; i--) {
        csv[0].unshift(response_columns[i]);
    };


    // Display results on screen:
    var table = $('<table id="results-table" class="d-block table-auto mb-2 overflow-auto w-100 leading-relaxed">');
    var row = $('<tr>').html('<th>Row</th><th>Eligibility</th><th>Benefit</th><th>GI Test</th><th>NI Test</th><th>AL Test</th><th>GI Amount</th><th>NI Amount</th>');
    table.append(row);

    // Loop through our clients' data, skipping row 1 b/c that is the headers
    for (var i = 1; i < csv.length; i++) {

        // Get values for row
        var val_state = csv[i][loc_state].trim()
        var val_household_size = csv[i][loc_household_size].trim()
        var val_monthly_job_income = csv[i][loc_monthly_job_income].trim()
        var val_HIEOD_1 = parseInt(csv[i][loc_household_includes_elderly_or_disabled_1].trim())
        var val_HIEOD_2 = parseInt(csv[i][loc_household_includes_elderly_or_disabled_2].trim())

        // Confirm State is valid
        if (validStates.includes(val_state) == false) {
            is_estimated_eligibility = 'State Not Supported';
            estimated_monthly_benefit = '-';
            GI_test = '-';
            NI_test = '-';
            AL_test = '-';
            GI_amount = '-';
            NI_amount = '-';

            EXPLAIN_GI = '-';
            EXPLAIN_NI = '-';
            EXPLAIN_benefit = '-';
            EXPLAIN_GI_test = '-';
            EXPLAIN_NI_Test = '-';
            EXPLAIN_AL_Test = '-';

        } else {

            // Calculations
            var val_HIEOD = (val_HIEOD_1 == HIEOD_1_bool) | (val_HIEOD_2 == HIEOD_2_bool) // either elderly or disabled
            var val_HH_SIZE = Math.max(1, int(val_household_size)); // Household size minimum 1

            // Create the input json with client's data
            var inputs = {
                // Our inputs
                household_includes_elderly_or_disabled: val_HIEOD,    // This is an either or
                household_size: val_HH_SIZE, // Household size minimum 1
                monthly_job_income: int(val_monthly_job_income),

                // TODO, add resources
                resources: 0,

                // Constants here
                monthly_non_job_income: 0,
                state_or_territory: stateSpecialRules(val_state, val_HH_SIZE),
            };

            console.log('')
            console.log('============ Client ' + i + '============')
            console.log(inputs)

            // Get response
            var response = new SnapAPI.SnapEstimateEntrypoint(inputs).calculate();
            console.log('Row', i, response);

            // Format results
            is_estimated_eligibility = response.estimated_eligibility;
            estimated_monthly_benefit = response.estimated_monthly_benefit;
            GI_test = response['eligibility_factors'][3]['result'];
            NI_test = response['eligibility_factors'][4]['result'];
            AL_test = response['eligibility_factors'][5]['result'];

            GI_amount = response['eligibility_factors'][0]['result'];
            NI_amount = response['eligibility_factors'][1]['result'];

            // Escape so commas dont create new column in csv
            EXPLAIN_GI = "\"" + response['eligibility_factors'][0]['explanation'].join('<br><br>') + "\"";
            EXPLAIN_NI = "\"" + response['eligibility_factors'][1]['explanation'].join('<br><br>') + "\"";
            EXPLAIN_benefit = "\"" + response['eligibility_factors'][2]['explanation'].join('<br><br>') + "\"";
            EXPLAIN_GI_test = "\"" + response['eligibility_factors'][3]['explanation'].join('<br><br>') + "\"";
            EXPLAIN_NI_Test = "\"" + response['eligibility_factors'][4]['explanation'].join('<br><br>') + "\"";
            EXPLAIN_AL_Test = "\"" + response['eligibility_factors'][5]['explanation'].join('<br><br>') + "\"";

        };



        // Put the results into the CSV (add new from the top)
        csv[i].unshift(EXPLAIN_AL_Test);
        csv[i].unshift(EXPLAIN_NI_Test);
        csv[i].unshift(EXPLAIN_GI_test);
        csv[i].unshift(EXPLAIN_benefit);
        csv[i].unshift(EXPLAIN_NI);
        csv[i].unshift(EXPLAIN_GI);
        csv[i].unshift(NI_amount);
        csv[i].unshift(GI_amount);
        csv[i].unshift(AL_test);
        csv[i].unshift(NI_test);
        csv[i].unshift(GI_test);
        csv[i].unshift(estimated_monthly_benefit);
        csv[i].unshift(is_estimated_eligibility);

        // Put the results to display on page (add new from the bottom)
        var row = $('<tr>').html('<td>' + i +
            '</td><td>' + is_estimated_eligibility +
            '</td><td>' + estimated_monthly_benefit +
            '</td><td>' + GI_test +
            '</td><td>' + NI_test +
            '</td><td>' + AL_test +
            '</td><td>' + GI_amount +
            '</td><td>' + NI_amount +
            '</td>');
        table.append(row);


    };


    $('#results-array').append(table);

    console.log('Resulting CSV');
    console.log(csv);
    downloadCSV(csv);

    $('#download-button').prop('disabled', false);
};

// Set up sample download
var sampleData = [
    ["STATE", "HH_SIZE", "SENIOR_IN_HOUSEHOLD", "DISABILITY_IN_HOUSEHOLD", "MONTHLY_JOB_INCOME"],
    ["PA", "2", "0", "0", "2000"],
    ["PA", "3", "0", "0", "2000"],
    ["PA", "4", "0", "0", "2000"],
    ["PA", "5", "0", "0", "2000"],
    ["PA", "2", "1", "0", "2300"],
    ["CA", "2", "0", "1", "2300"],
    ["IN", "2", "0", "0", "2300"],
    ["IL", "3", "1", "0", "500"],
    ["VA", "2", "0", "1", "4000"],
    ["NV", "4", "0", "0", "9000"]
];
document.getElementById('sample-csv').onclick = function () { downloadCSV(sampleData, true) };