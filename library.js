// JaydenDev 2022
// MIT License
// BracketsJS
// Javascript libary with functions for live dom manipulation
var brackets = {};
const version = 'v1.2.0-beta.2';

console.log('BracketsJS: You are currently using ' + version);

// functions
brackets.createElem = (element, parentID, id, className, innerHTML, href) => {
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
    if (element == "a") {
        newElement.href = href;
    }
    return newElement;
}

brackets.removeLinks = () => {
        var links = document.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
        links[i].parentNode.removeChild(links[i]);
    }
}
brackets.swapStyles = (style) => {
    if (!style.endsWith(".css")) {
        console.log("BracketsJS: " + style + " is not a css file.");
        return;
    } else {
        removeLinks();
        loadCSSFile(style);
    }
}

brackets.addScript = (path, bypass) =>{
    if (!path.endsWith(".js")) {
        if (bypass == 'fileName') { 
            console.log('BracketsJS: fileName bypass is used, this is not recommended' )
            let bypassFileExtension = true;
        }
        if (bypassFileExtension = true) {
            const script = document.createElement('script');
            script.src = path;
            document.getElementsByTagName('body')[0].appendChild(script);
        } else {
        console.log('BracketsJS: ' + path + " is not a javascript file.");
        return;
        }
    } else {
        const script = document.createElement('script');
        script.src = path;
        document.getElementsByTagName('body')[0].appendChild(script);
    }
    return;
}

brackets.removeElem = (id) => {
    var elem = get(id);
    rmChild(elem);
}

brackets.loadCSSFile = (path) => { 
    if (!path.endsWith(".css")) {
        console.log("BracketsJS: " + path + " is not a css file.");
        return;
    } else {   
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = path;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

// aliases
var get = document.getElementById.bind(document); // aliases document.getElementById to just 'get'
var delay = setTimeout.bind(window); // aliases setTimeout to just 'delay'
const getAll = selector => document.querySelectorAll(selector); // quick alias to get all elements 
const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // get a random number
const rmChild = (elem) => elem.parentNode.removeChild(elem);
