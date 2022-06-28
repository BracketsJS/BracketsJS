// JaydenDev 2022
// MIT License
// BracketsJS
// A JavaScript library that provides functions for live DOM manipulation

var brackets = {
  version: "v1.4.0",
  debug: false,

  createElem: (element, parentID, id, className, innerHTML, href) => {
    let elem = document.createElement(element);
    if (id) {
      elem.id = id;
    }
    if (className) {
      elem.className = className;
    }
    if (innerHTML) {
      elem.innerHTML = innerHTML;
    }
    if (parentID) {
      parent = document.getElementById(parentID);
      parent.appendChild(elem);
    }
    if (element == "a") {
      elem.href = href;
    }
    return elem;
  },
  removeLinks: () => {
    let links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
      links[i].parentNode.removeChild(links[i]);
    }
  },
  swapStyles: (style) => {
    if (!style.endsWith(".css")) {
      return new Error(`BracketsJS: ${path} is not a valid CSS file`);
    } else {
      this.removeLinks();
      this.loadCSSFile(style);
    }
  },
  addScript: (path, bypass) => {
    if (!path.endsWith(".js")) {
      let bypassFileExtension = false;
      if (bypass == "fileName") {
        console.warn("BracketsJS: fileName bypass is being used, this is not recommended.");
        bypassFileExtension = true;
      }
      if (bypassFileExtension) {
        let script = document.createElement("script");
        script.src = path;
        document.body.appendChild(script);
      } else {
        return new Error(`BracketsJS: ${path} is not a valid javascript file.`);
      }
    } else {
      let script = document.createElement("script");
      script.src = path;
      document.body.appendChild(script);
      return;
    }
    this.removeLinks();
    this.loadCSSFile(style);
  },

  changeTitle: (newTitle) => {
        document.title(newTitle);
  },

  removeElem: (id) => {
    var elem = get(id);
    elem.parentNode.removeChild(elem);
  },

  loadCSSFile: (path) => {
    if (!path.endsWith(".css")) {
      return new Error(`BracketsJS: ${path} is not a valid CSS file`);
    } else {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = path;
      document.head.appendChild(link);
    }
  },

  swapFavicon: (href) => {
    let link = document.querySelector('link[rel*="icon"]') || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = href;
    document.head.appendChild(link);
  },

  toggleElementVisibility: (id) => {
    let elem = document.getElementsById(id);
    if (elem.style.display == "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  },

  toggleClass: (id, className) => {
    let elem = document.getElementById(id);
    if (elem.classList.includes(className)) {
      elem.classList.remove(className);
    } else {
      elem.classList.add(className);
    }
  },

  detectURIArgs: () => {
    let url = window.location.href;
    let urlArgs = url.split("?");
    let args = urlArgs[1].split("&");
    let argsObj = {};
    for (let i = 0; i < args.length; i++) {
      let arg = args[i].split("=");
      argsObj[arg[0]] = arg[1];
    }

    console.log(argsObj);
    return argsObj;
  },

  getScripts: () => {
    let scriptsArray = [];
    for (var i = 0; i < document.scripts.length; i++) {
      scriptsArray.push(document.scripts[i].src);
    }
    this.debugLog(`Scripts Loaded ${scriptsArray}`);
  },

  debugLog: (text) => {
    if (this.debug) {
      console.log(`DEBUG: ${text}`);
    }
  }
}

module.exports = brackets;
