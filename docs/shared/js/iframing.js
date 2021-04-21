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


// Swap emails
$(".hotline-wrapper:contains('{{HOTLINE_EMAIL}}')").each(function() {
    $(this).html($(this).html().replace("{{HOTLINE_EMAIL}}", contactEmail));
});
$(".hotline-email a" ).html(contactEmail);

// Swap numbers
$(".hotline-wrapper:contains('{{HOTLINE_NUMBER}}')").each(function() {
    $(this).html($(this).html().replace("{{HOTLINE_NUMBER}}", contactPhone));
});
$(".hotline-number a" ).html(contactPhone);

if ((contactPhone == '') && (contactEmail == '')) {
    document.getElementsByClassName('hotline-wrapper')[0].style.display = 'none';
} else if ((contactPhone == '') || (contactEmail == '')) {
    document.getElementsByClassName('hotline-or')[0].style.display = 'none';
    document.getElementsByClassName('hotline-or')[1].style.display = 'none';
};

// Demo header
var isDebug = urlParams.get('debug');
if (isDebug != 'false') {
    $('.debug-info').removeClass('d-none');
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
if (showTitles != 'false') {
    document.getElementById('title-section').style.display = '';
};

// API
var API_CALLS_REMAINING = 3;
function sendFormData(contact_me){

    if (contact_me == false){
        API_CALLS_REMAINING = API_CALLS_REMAINING - 1;
    };

    if ((API_CALLS_REMAINING < 0) & (contact_me == false)){
        console.log("Rate Limited");
    }else{

        CURRENT_PROFILE.contact_me = contact_me;
        CURRENT_PROFILE.email = 'info@snapscreener.com';
    
        var WEBHOOK_URL = decodeURIComponent(urlParams.get('webhook'));
    
        // For security, all authorized webhooks must be listed here
        var ALLOWED_ENDPOINTS = [
            'https://hooks.zapier.com' + '/hooks/catch/9956374/ovmx2ja',
        ];
    
        console.log($.inArray(WEBHOOK_URL, ALLOWED_ENDPOINTS));
    
        if ($.inArray(WEBHOOK_URL, ALLOWED_ENDPOINTS) != -1){
    
            $.ajax({
                type: "POST",
                url: WEBHOOK_URL,
                data: CURRENT_PROFILE
            });
    
        }else{
            console.log('Unauthorized webhook. Please contact info@snapscreener.com for more information.');
        };

    };
};
