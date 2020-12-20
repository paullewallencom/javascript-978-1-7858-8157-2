/**
 * Declaring object type inside constructor
 */
"use strict";
 /**
  * @class
  */
var Constructor = function(){
    /**
    * @type {String}
    * @public
    */
    this.bar = "bar";
    /**
    * @public
    * @returns {String}
    */
    this.foo = function() {
     return this.bar;
    };
  },
  /** @type Constructor */
  instance = new Constructor();

console.log( instance.foo() ); // bar
console.log( instance instanceof Constructor ); // true
