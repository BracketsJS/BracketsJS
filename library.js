// simplicity js
// mit license
// get more work done with less code, like jquery
// JaydenDev, 2022
console.log("Its never a good idea to use a file not tied to a release!")
const get = id => document.getElementById(id);
const getAll = selector => document.querySelectorAll(selector);
const mult = (a, b) => a * b;
const divid = (a, b) => a / b;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function createElem(tag, text, id, className) {
    const elem = document.createElement(tag);
    if (className) {
        elem.className = className;
    }
    if (text) {
        elem.textContent = text;
    }
    if (id) {
        elem.id = id;
    }
}

function appendElem(parent, child) {
    parent.appendChild(child);
}

function setClass(elem, className) {
    elem.className = className;
}

function injectStyle(elem, style) {
    elem.style = style;
}

function loadCSSFile(path) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    head.appendChild(link);
}

function onKeyPressRun(key, func) {
    document.addEventListener('keypress', function(e) {
        if (e.keyCode === key) {
            func();
        }
    });
}

function createListener(elem, event, func) {
    elem.addEventListener(event, func);
}

function addScript(path) {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = path;
    head.appendChild(script);
}

function toggleClass(className, elem) {
    elem.classList.toggle(className);
}