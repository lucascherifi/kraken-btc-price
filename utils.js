var get_multiplier = function () {
    return parseFloat(localStorage.multiplier || '1');
},
reload_badge = function () {
    $.getJSON("https://www.bitstamp.net/api/ticker/", function (data) {
        if (!data && !data.last) {
            return;
        }
        var value = parseFloat(data.last) * get_multiplier();
        chrome.browserAction.setBadgeBackgroundColor({
            color: [0, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({
            'text': value.toFixed(1)
        });
    });
},
save_options = function () {
    var multiplier = $('#multiplier').val();
    localStorage.multiplier = multiplier || '1';
    reload_badge();
},
load_options = function () {
    $('#save').on('click', save_options);
    $('#multiplier').val(get_multiplier());
},
background = function () {
    chrome.browserAction.onClicked.addListener(function (tab) {
        chrome.browserAction.setBadgeBackgroundColor({
            color: [255, 0, 0, 255]
        });
        chrome.browserAction.setBadgeText({
            'text': '...'
        });
        reload_badge();
    });
    setInterval(reload_badge, 60000);
    reload_badge();
};
