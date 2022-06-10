// JaydenDev 2022
// MIT License
// BracketsJS
// Javascript library with functions for live DOM manipulation

var brackets = {};
brackets.version = "v1.3.0";

console.log(
  "%c BracketsJS: You are currently using " + brackets.version,
  "color: green; font-weight: bold;"
);

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
};

brackets.removeLinks = () => {
  var links = document.getElementsByTagName("link");
  for (var i = 0; i < links.length; i++) {
    links[i].parentNode.removeChild(links[i]);
  }
};
brackets.swapStyles = (style) => {
  if (!style.endsWith(".css")) {
    console.log(
      "%c BracketsJS: " + style + " is not a css file.",
      "color: red; font-weight: bold;"
    );
    if (!style.endsWith(".css")) {
        console.log("%c BracketsJS: " + style + " is not a css file.", "color: red; font-weight: bold;");
        return;
    } else {
        removeLinks();
        loadCSSFile(style);
    }
}

brackets.addScript = (path, bypass) =>{
    if (!path.endsWith(".js")) {
        if (bypass == 'fileName') { 
            console.log('%c BracketsJS: fileName bypass is used, this is not recommended', 'color: orange; font-weight: bold;' )
            bypassFileExtension = true;
        }
        if (bypassFileExtension) {
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
        return;
    }
    removeLinks();
    loadCSSFile(style);
  }
};

brackets.addScript = (path, bypass) => {
  if (!path.endsWith(".js")) {
    if (bypass == "fileName") {
      console.log(
        "%c BracketsJS: fileName bypass is used, this is not recommended",
        "color: orange; font-weight: bold;"
      );
      bypassFileExtension = true;
    }
    if ((bypassFileExtension = true)) {
      const script = document.createElement("script");
      script.src = path;
      document.getElementsByTagName("body")[0].appendChild(script);
    } else {
      console.log("BracketsJS: " + path + " is not a javascript file.");
      return;
    }
  } else {
    const script = document.createElement("script");
    script.src = path;
    document.getElementsByTagName("body")[0].appendChild(script);
  }
  return;
};

brackets.removeElem = (id) => {
  var elem = get(id);
  rmChild(elem);
};

brackets.loadCSSFile = (path) => {
  if (!path.endsWith(".css")) {
    console.log(
      "%c BracketsJS: " + path + " is not a css file.",
      "color: red; font-weight: bold;"
    );
    return;
  } else {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = path;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
};

brackets.swapFavicon = (path) => {
  var link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = path;
  document.getElementsByTagName("head")[0].appendChild(link);
};

brackets.toggleElementVisibility = (id) => {
  var elem = _("#" + id);
  if (elem.style.display == "block") {
    elem.style.display = "none";
  } else {
    elem.style.display = "block";
  }
};

brackets.toggleClass = (id, className) => {
  var elem = _("#" + id);
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  } else {
    elem.classList.add(className);
  }
};

brackets.getScripts = () => {
  var scripts = document.getElementsByTagName("script");
  var scriptsArray = [];
  for (var i = 0; i < scripts.length; i++) {
    scriptsArray.push(scripts[i].src);
  }
  console.log(
    "%c DEBUG: Scripts Loaded " + scriptsArray,
    "color: green; font-weight: bold;"
  );
};

brackets.setHTMLToVarOnVarUpdate = (id, varName) => {
  var elem = _("#" + id);
  varName.on("update", () => {
    elem.innerHTML = varName.get();
  });
};

// Aliases
var _ = document.querySelector.bind(document); // Aliases document.querySelector to _
var delay = setTimeout.bind(window); // Aliases setTimeout to just 'delay'
const rmChild = (elem) => elem.parentNode.removeChild(elem); // Remove DOM child
