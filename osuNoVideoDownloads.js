// ==UserScript==
// @name         Osu No Video downloads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        *://osu.ppy.sh/beatmapsets*
// @grant        GM_webRequest
// @webRequest   [{"selector":"*://osu.ppy.sh/beatmapsets/*", "action":"cancel"}

// ==/UserScript==

//var filter = {urls: ["*://osu.ppy.sh/beatmapsets/*/download"]};
/*
 GM_webRequest();

GM_webRequest.onBeforeRequest.addListener(
    function(url){
        var noVidLink = url + "?noVideo=1";
        alert("no vid link: " + noVidLink);
    },
    filter
);
*/

//Alternative method to modify page links
window.addEventListener('load', function(event) {
var downloadButtons = document.querySelectorAll('a.js-beatmapset-download-link');
for (var button of downloadButtons) {
    var originalUrl = button.getAttribute('href');
    if (originalUrl.endsWith('download')) {
        var url = button.getAttribute('href') + "?noVideo=1";
        button.setAttribute('href', url);
        console.log("replaced url with novid");
    }
}
});
