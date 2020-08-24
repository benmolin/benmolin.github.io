// Global
var csv;
var validStates = ['PA', 'IL', 'VA'];

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

    // Add new column for snap eligibility
    csv[0].unshift("estimated_eligibility");
    var results_array = [];

    // Loop through our clients' data, skipping row 1 b/c that is the headers
    for (var i = 1; i < csv.length; i++) {

        var is_estimated_eligibility;

        // Get values for row
        var val_state = csv[i][loc_state].trim()
        var val_household_size = csv[i][loc_household_size].trim()
        var val_monthly_job_income = csv[i][loc_monthly_job_income].trim()
        var val_HIEOD_1 = parseInt(csv[i][loc_household_includes_elderly_or_disabled_1].trim())
        var val_HIEOD_2 = parseInt(csv[i][loc_household_includes_elderly_or_disabled_2].trim())

        // Confirm State is valid
        if (validStates.includes(val_state) == false) {
            is_estimated_eligibility = 'State Not Supported';
        } else {

            // Calculations
            var val_HIEOD = (val_HIEOD_1 == HIEOD_1_bool) | (val_HIEOD_2 == HIEOD_2_bool) // either elderly or disabled

            // Create the input json with client's data
            var inputs = {
                // Our inputs
                household_includes_elderly_or_disabled: val_HIEOD,    // This is an either or
                household_size: Math.max(1, int(val_household_size)), // Household size minimum 1
                monthly_job_income: int(val_monthly_job_income),

                // TODO, add resources
                resources: 0,

                // Constants here
                monthly_non_job_income: 0,
                state_or_territory: val_state,
            };

            console.log('')
            console.log('============ Client ' + i + '============')
            console.log(inputs)

            // Get response
            var response = new SnapAPI.SnapEstimateEntrypoint(inputs).calculate();
            is_estimated_eligibility = response.estimated_eligibility;
            console.log('Row', i, response);

        };

        // Log results
        csv[i].unshift(is_estimated_eligibility);
        results_array.push(is_estimated_eligibility);

    };


    // Display results on screen:
    var table = $('<table id="results-table" class="table-auto mb-2 w-100 leading-relaxed">');
    var row = $('<tr>').html('<th>Row</th><th>Estimated Eligibility</th>');
    table.append(row);
    for (var i = 1; i <= results_array.length; i++) {
        console.log(results_array[i]);
        var row = $('<tr>').html('<td>' + i + '</td><td>' + results_array[i - 1] + '</td>');
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
    ["PA", "2", "0", "1", "2300"],
    ["PA", "2", "0", "0", "2300"],
    ["IL", "3", "1", "0", "500"],
    ["PA", "2", "0", "1", "4000"],
    ["CA", "4", "0", "0", "9000"]
];
document.getElementById('sample-csv').onclick = function () { downloadCSV(sampleData, true) };