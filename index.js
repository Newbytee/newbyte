"use strict";

function toggleTheme() {
    const STYLESHEET_ROOT = document.styleSheets[0].cssRules[0];

    //STYLESHEET_ROOT.0 =
}

function filterAfter(tag) {
    const CARDS = document.getElementsByClassName("contentCard");

    for (let i = 0; i < CARDS.length; i++) {
        CARDS[i].style.display = "none";
    }

    for (let i = 0; i < CARDS.length; i++) {
        const TAGS = CARDS[i].getAttribute("data-contentType").split(" ");

        for (let j = 0; j < TAGS.length; j++) {
            if (TAGS[j] === tag) {
                CARDS[i].style.display = "block";
                break;
            }
        }
    }
}