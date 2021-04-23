var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

// See if calculator in iFrame
try {
    var inFrame = self !== top;
} catch (e) {
    var inFrame = true;
};

// If not in an iFrame, remove some parameters that can be customized
if (inFrame == false){
    urlParams.delete('email')
    urlParams.delete('phone')
    urlParams.delete('apply_url')
    urlParams.delete('apply_desc')
    urlParams.delete('resources_url')
    urlParams.delete('resources_desc')
};