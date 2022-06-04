// this file allows for BracketsJS to be used with Node
const fs = require('fs'); // requires fs module
filedata = fs.readFileSync('./node_modules/bracketsjs/library.min.js','utf8'); // reads BracketsJS
eval(filedata); // loads BracketsJS

exports.BracketsJS  = BracketsJS; // exports BracketsJS to be used with Node
