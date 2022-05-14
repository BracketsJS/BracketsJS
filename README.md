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
createElement(element, parentID, id, className, innerHTML, href);
```
## removeLinks
Remove all link tags
```javascript
removeLinks();
```
## swapStyles
Swap the stylesheet with the stylesheet defined
```javascript
swapStyles(stylesheet);
```
## addScript
Injects as script into head tag
```javascript
addScript(script);
```
## loadCSSFile
Loads a css file
```javascript
loadCSSFile(file);
```
# Aliases
## get
Gets the element with the given id
```javascript
get(id);
```
## getAll
Gets all elements with the given class name
```javascript
getAll(className or ID);
```
# Math aliases
## add
Adds two numbers
```javascript
add(number1, number2);
```
## sub
Subtracts two numbers
```javascript
sub(number1, number2);
```
## mult
Multiplies two numbers
```javascript
mult(number1, number2);
```
## div
Divides two numbers
```javascript
divid(number1, number2);
```
## getRand
Gets a random number between the given numbers
```javascript
getRand(min, max);
```