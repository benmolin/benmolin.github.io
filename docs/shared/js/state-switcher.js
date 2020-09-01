// States
var states = [
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['District Of Columbia', 'DC'],
    ['Delaware', 'DE'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
];

function changeState(stateAbbr) {
    // Get the long name
    for (var i = 0; i < 50; i++) {
        if (states[i][1] == stateAbbr) {
            stateFull = states[i][0];
        };
    };

    // Change the state 
    $('#prescreener-form').attr('data-state-or-territory', stateAbbr); // in the form
    $('title').text(stateAbbr + ' SNAP Prescreener'); // in the title
    $('#main .title').text(stateFull + ', could you be eligible for help with your food budget?') // In the header
};

// Get the State
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var stateAbbr = urlParams.get('state');
if (stateAbbr == null) {
    stateAbbr = 'PA';
};
var stateFull;
changeState(stateAbbr);


// Dev state changer
$('#dev-state-change').on('change', function () {
    stateAbbr = this.value;
    changeState(this.value);

    if (is_showIncomeTable) {
        showIncomeTable();
    };
});
