# Not to be confused with...
> **There is currently a text editor named brackets**
> [brackets](https://brackets.io/)
> This is an unrelated project
# Why I created this project
I developed BracketsJS using some new ideas, some code from my previous projects and ended up spending more time naming it than actually coding it. It has some math aliases and DOM access aliases as well. It has a few features already that'll suffice for a release. It will make some things easier like dark mode for example.
# The goal
The goal of this project is to make a javascript libary that makes javascript easier to use. But make sure to learn how javascript works first.
# Contributing
Contributing is easy, just go to the [GitHub](https://github.com/JaydenDev/BracketsJS) and make a pull request. Don't worry about minified code, it gets minified before release.
# Forking
You are completely free to fork this project and make your own version. You just need to make sure to give credit to the original creator, JaydenDev. I'd prefer if you kept it open source as well.
# Using the library
It's as easy as linking it in your HTML in the HEAD tag
```html
<script src="https://unpkg.com/bracketsjs@1.0.0/library.js"></script>
```
# The functions
## createElement
Creates an element with the given tag name.
```javascript
brackets.createElement(element, parentID, id, className, innerHTML, href);
```
**element** - The element tag
**parentID** - The ID of the parent element \
**id** - The ID to give the element \
**className** - The class to give the element \
**innerHTML** - The HTML to give the element \
**href** - Where to have the link point if the element is a link "a"
## removeLinks
Remove all link tags
```javascript
brackets.removeLinks();
```
## swapStyles
Swap the stylesheet with the stylesheet defined
```javascript
brackets.swapStyles(stylesheet);
```
**stylesheet** - Path to css file
## addScript
Injects as script into head tag
```javascript
brackets.addScript(script);
```
## loadCSSFile
Loads a css file
```javascript
brackets.loadCSSFile(file);
```
**script** - path to script
## getScripts
```javascript
brackets.getScripts()
```
## swapFavicon
```javascript
brackets.swapFavicon(path/to/favicon)
```
## toggleElementVisibility
```javascript
brackets.toggleElementVisibility(id)
```
### toggleClass
```javascript
brackets.toggleClass(id, className)
```
# Aliases
## get
Gets the element with the given id
```javascript
_(id)
```
