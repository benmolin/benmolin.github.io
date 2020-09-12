// States
var states = [
    ['Alabama', 'AZ', 'Alabamian'],
    ['Alaska', 'AL', 'Alaskan'],
    ['Arizona', 'AK', 'Arizonan'],
    ['Arkansas', 'AR', 'Arkansan'],
    ['California', 'CA', 'Californian'],
    ['Colorado', 'CO', 'Coloradan'],
    ['Connecticut', 'CT', 'Connecticuter'],
    ['Delaware', 'DE', 'Delawarean'],
    ['District Of Columbia', 'DC', 'Washingtonian'],
    ['Florida', 'FL', 'Floridian'],
    ['Georgia', 'GA', 'Georgian'],
    ['Hawaii', 'HI', 'Hawaiian'],
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
    ['New Hampshire', 'NH', 'New Hampshirite'],
    ['New Jersey', 'NJ', 'New Jerseyan'],
    ['New Mexico', 'NM', 'New Mexican'],
    ['New York', 'NY', 'New Yorker'],
    ['North Carolina', 'NC', 'North Carolinian'],
    ['North Dakota', 'ND', 'North Dakotan'],
    ['Ohio', 'OH', 'Ohioan'],
    ['Oklahoma', 'OK', 'Oklahoman'],
    ['Oregon', 'OR', 'Oregonian'],
    ['Pennsylvania', 'PA', 'Pennsylvanian'],
    ['Rhode Island', 'RI', 'Rhode Islander'],
    ['South Carolina', 'SC', 'South Carolinian'],
    ['South Dakota', 'SD', 'South Dakotan'],
    ['Tennessee', 'TN', 'Tennessean'],
    ['Texas', 'TX', 'Texan'],
    ['Utah', 'UT', 'Utahn'],
    ['Vermont', 'VT', 'Vermonter'],
    ['Virginia HH1_3', 'VA_HH1_3', 'Virginian'],
    ['Virginia HH4_X', 'VA_HH4_X', 'Virginian'],
    ['Washington', 'WA', 'Washingtonian'],
    ['West Virginia', 'WV', 'West Virginian'],
    ['Wisconsin', 'WI', 'Wisconsinite'],
    ['Wyoming', 'WY', 'Wyomingite'],
];

function switchStateOnPage(stateAbbr) {

    $('#prescreener-form').attr('data-state-or-territory', stateAbbr); // in the form
    applyStateRegionOrSizeRules(stateAbbr);

    // Get the long name
    for (var i = 0; i < 50; i++) {
        if (states[i][1].substring(0, 2) == stateAbbr) {
            var stateFull = states[i][0];
            var stateDemonym = states[i][2];
            break;
        };
    };

    // Change the state 
    $('title').text(stateAbbr + ' SNAP Prescreener'); // in the title
    $('#main .title').text(stateDemonym + 's, could you be eligible for help with your food budget?') // In the header
};

// Dev state changer
$('#dev-state-change').on('change', function () {
    stateAbbr = this.value;

    applyStateRegionOrSizeRules();
    switchStateOnPage(this.value);

    if (is_showIncomeTable) {
        showIncomeTable();
    };
});

function applyStateRegionOrSizeRules() {

    // First, get current state
    var stateKey = $('#prescreener-form').attr('data-state-or-territory');
    var stateAbbr = stateKey.substring(0, 2)

    // Then, get household size
    var HH_Size = $('#household_size').val();
    if (HH_Size == "") {
        HH_Size = 0;
    };
    HH_Size = parseInt(HH_Size);

    console.log(HH_Size, stateKey, stateAbbr);

    // Special rules
    if (stateAbbr == 'VA') {
        if (HH_Size <= 3) {
            $('#prescreener-form').attr('data-state-or-territory', 'VA_HH1_3');
        } else {
            $('#prescreener-form').attr('data-state-or-territory', 'VA_HH4_X');
        };
    };

};


$('#household_size').on('change', function () {
    applyStateRegionOrSizeRules();
});