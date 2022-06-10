// JaydenDev and other contributors 2022
// MIT License
// BracketsJS
// A JavaScript library that provides functions for live DOM manipulation

const brackets = {
  version: "v1.3.0",
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

  removeElem: (id) => {
      var elem = get(id);
      rmChild(elem);
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
      let elem = _(`#${id}`);
      if (elem.style.display == "block") {
          elem.style.display = "none";
      } else {
          elem.style.display = "block";
      }
  },

  toggleClass: (id, className) => {
      let elem = _(`#${id}`);
      if (elem.classList.contains(className)) {
          elem.classList.remove(className);
      } else {
          elem.classList.add(className);
      }
  },

  getScripts: () => {
      let scriptsArray = [];
      for (var i = 0; i < document.scripts.length; i++) {
          scriptsArray.push(document.scripts[i].src);
      }
      debugLog(`Scripts Loaded ${scriptsArray}`);
  },

  debugLog: (text) => {
      if (this.debug) {
          console.warn(`DEBUG: ${text}`);
      }
  },
};

console.log(`BracketsJS: You are currently using ${brackets.version}.`);

// Aliases
var _ = document.querySelector.bind(document); // Aliases document.querySelector to _
var delay = setTimeout.bind(window); // Aliases setTimeout to just 'delay'
const rmChild = (elem) => elem.parentNode.removeChild(elem); // Remove DOM child
