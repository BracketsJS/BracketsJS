(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["brackets"] = factory();
	else
		root["brackets"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  swapStyles: style => {
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
  removeElem: id => {
    var elem = get(id);
    elem.parentNode.removeChild(elem);
  },
  loadCSSFile: path => {
    if (!path.endsWith(".css")) {
      return new Error(`BracketsJS: ${path} is not a valid CSS file`);
    } else {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = path;
      document.head.appendChild(link);
    }
  },
  swapFavicon: href => {
    let link = document.querySelector('link[rel*="icon"]') || document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = href;
    document.head.appendChild(link);
  },
  toggleElementVisibility: id => {
    let elem = document.getElementsById(id);

    if (elem.style.display == "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  },
  toggleClass: (id, className) => {
    let elem = document.getElementById(id);

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

    this.debugLog(`Scripts Loaded ${scriptsArray}`);
  },
  debugLog: text => {
    if (this.debug) {
      console.warn(`DEBUG: ${text}`);
    }
  }
};
module.exports = brackets;

/***/ })

/******/ });
});