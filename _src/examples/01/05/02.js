/**
 *
 * Declaring object type via prototype chain
 */
"use strict";
/**
* @class
*/
var Constructor = function(){},
    instance;
/**
* @type {String}
* @public
*/
Constructor.prototype.bar = "bar";
/**
* @public
* @returns {String}
*/
Constructor.prototype.foo = function() {
  return this.bar;
};
/** @type Constructor */
instance = new Constructor();

console.log( instance.foo() ); // bar
console.log( instance instanceof Constructor ); // true
