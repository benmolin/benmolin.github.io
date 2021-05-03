var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

// See if calculator in iFrame
try {
    var inFrame = self !== top;
} catch (e) {
    var inFrame = true;
};

var inputEmail = urlParams.get('email_input');
var inputPhone = urlParams.get('phone_input');
var WEBHOOK_URL = decodeURIComponent(urlParams.get('webhook'));

// If not in an iFrame, remove some parameters that can be customized
if (inFrame == false){
    urlParams.delete('email');
    urlParams.delete('phone');
    urlParams.delete('apply_url');
    urlParams.delete('apply_desc');
    urlParams.delete('resources_url');
    urlParams.delete('resources_desc');

    if (inputEmail != null){
        inputEmail = 'EXAMPLE: DO NOT ENTER REAL DATA (Use test@snapscreener.com';
    };
    if (inputPhone != null){
        inputPhone = 'EXAMPLE: DO NOT ENTER REAL DATA (Use 123-456-7890)';
    };
    if (WEBHOOK_URL != ('https://hook.integromat.com/' + 'kc6a17za95xpw4gqcxcllzfbcibynud8')){
        WEBHOOK_URL = null;
    };

};