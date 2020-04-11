// ==UserScript==
// @name         NextDoor Remove Sponsored posts
// @namespace    https://nextdoor.com/
// @version      0.1
// @description  Visually removes the sponsored posts, so you can focus on your community posts.
// @author       Kevin Lau
// @match        *://nextdoor.com/*
// @grant        none
// ==/UserScript==

var removeSponsored = function(event) {
    var sponsors = document.body.getElementsByClassName("post-highlight-container");
    for (var sponsor of sponsors) {
        //hide sponsored posts
        //sponsor.parentNode.parentNode.style.display = "none";

        //delete sponsored posts
        sponsor.parentNode.parentNode.remove();
    }
}

//TODO: is it possible to entirely prevent loading in the first place? maybe check network calls

window.addEventListener('load', removeSponsored);
window.addEventListener('scroll', removeSponsored, false);
//TODO: find better way to trigger
