var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

// State
var stateAbbr = urlParams.get('state');
if (stateAbbr == null) {
    stateAbbr = 'PA';
};
var stateFull;
switchStateOnPage(stateAbbr);

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
};
