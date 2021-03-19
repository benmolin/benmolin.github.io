var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

// State
var stateFull;
var stateAbbr = urlParams.get('state')
if (stateAbbr != null) {
    stateAbbr = stateAbbr.substr(0,2);
    switchStateOnPage(stateAbbr);
} else {
    $('.calculator').addClass('d-none');
    $('#no-state-selected').removeClass('d-none');
    $('#no-state-selector').on('change', function () {
        var new_url = window.location.href + '?state=' + $('#no-state-selector').val();
        window.location.replace(new_url);
    });
    $('#dev-state-change').on('change', function () {
        var new_url = window.location.href + '?state=' + $('#dev-state-change').val();
        window.location.replace(new_url);
    });
};

// Phone number and email
var contactPhone = urlParams.get('phone');
var contactEmail = urlParams.get('email');

if (contactPhone == null) { contactPhone = '' };
if (contactEmail == null) { contactEmail = '' };

document.getElementsByClassName('hotline-number')[0].innerHTML = contactPhone;
document.getElementsByClassName('hotline-number')[1].innerHTML = contactPhone;
document.getElementsByClassName('hotline-email')[0].innerHTML = contactEmail;
document.getElementsByClassName('hotline-email')[1].innerHTML = contactEmail;

if ((contactPhone == '') && (contactEmail == '')) {
    document.getElementsByClassName('hotline-wrapper')[0].style.display = 'none';
    document.getElementById('snap-calculator-footer').style.display = 'none';
} else if ((contactPhone == '') || (contactEmail == '')) {
    document.getElementsByClassName('hotline-or')[0].style.display = 'none';
    document.getElementsByClassName('hotline-or')[1].style.display = 'none';
};

// Demo header
var isDebug = urlParams.get('debug');
if (isDebug == 'false') {
    $('.debug-info').addClass('d-none');
};

// Short form
var isShort = urlParams.get('short');
if (isShort == 'true') {
    document.getElementById('non-required-questions').style.display = 'none';
    document.getElementById('show-optional-questions').style.display = '';
};
$( "#show-optional-questions" ).click(function() {
    document.getElementById('non-required-questions').style.display = '';
    document.getElementById('show-optional-questions').style.display = 'none';
});

// Titles
var showTitles = urlParams.get('titles');
if (showTitles == 'false') {
    document.getElementById('title-section').style.display = 'none';
};

