"use strict";

var _foo = require("./foo");

console.log(_foo.bar); // bar
(0, _foo.setBar)("baz");
console.log(_foo.bar); // baz
// bar = "qux"; // TypeError