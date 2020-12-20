/**
 * every example
 */
"use strict";
var bar = [ "bar", "baz" ],
    foo = [ "bar", "baz", "qux" ],
    /**
     * Check if a given context (this) contains the value
     * @param {*} val
     * @return {Boolean}
     */
    compare = function( val ){
      return this.indexOf( val ) !== -1; 
    };

console.log( bar.every( compare, foo ) ); // true