// JaydenDev 2022
// MIT License
// SimplicityJS
// Javascript library to make the daily javascript tasks, simpler.

// functions
function createElement(element, parentID, id, className, innerHTML, href) {
    var newElement = document.createElement(element);
    if (id) {
        newElement.id = id;
    }
    if (className) {
        newElement.className = className;
    }
    if (innerHTML) {
        newElement.innerHTML = innerHTML;
    }
    if (parentID) {
        parent = document.getElementById(parentID);
        parent.appendChild(newElement);
    }
    newElement.href = href;
    return newElement;
}

function removeLinks() {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        links[i].parentNode.removeChild(links[i]);
    }
}

function swapStyles(style) {
    removeLinks();
    loadCSSFile(style);
}

function addScript(path) {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = path;
    head.appendChild(script);
}

function loadCSSFile(path) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    head.appendChild(link);
}

// aliases
var get = document.getElementById.bind(document); // aliases document.getElementById to just 'get'
var delay = setTimeout.bind(window); // aliases setTimeout to just 'delay'
const getAll = selector => document.querySelectorAll(selector); // quick alias to get all elements 
const mult = (a, b) => a * b; // multiply
const divid = (a, b) => a / b; // divide
const add = (a, b) => a + b; // add
const sub = (a, b) => a - b; // subtract
const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // get a random number


