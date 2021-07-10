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

// Phone and email fields
if (WEBHOOK_URL != null){

    // inputEmail and inputPhone are defined in base.js
    
    if (inputEmail != null){
        $('#email_form_field_label').addClass('usa-label');
        $('#email_form_field').removeClass('d-none');
        $('#email_field_subtext').text(decodeURIComponent(inputEmail));
    }
    if (inputPhone != null){
        $('#phone_form_field_label').addClass('usa-label');
        $('#phone_form_field').removeClass('d-none');
        $('#phone_field_subtext').text(decodeURIComponent(inputPhone));
    }
};
$( ".usa-label" ).first().css("margin-top", "8px");


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
    $('.hotline-wrapper').css('display', 'none');
} else if ((contactPhone == '') || (contactEmail == '')) {
    $('.hotline-or').css('display', 'none');
};

// Demo header
var isDebug = urlParams.get('debug');
if (isDebug != 'false') {
    $('.debug-info').removeClass('d-none');
};

// Student question
if (urlParams.get('student_question') == 'true') {
    $('#student-question').removeClass('hidden');
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
        console.log("SNAPScreener: Rate Limited");
    }else{

        CURRENT_PROFILE.contact_me = contact_me;
        
        $.ajax({
            type: "POST",
            url: WEBHOOK_URL, // defined in base.js
            data: CURRENT_PROFILE
        });

    };
};
