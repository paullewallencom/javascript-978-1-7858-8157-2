/**
 * some example
 */
"use strict";
var bar = [ "bar", "baz", "qux" ],
    foo = [ "foo", "baz", "qux" ],
    /**
     * Check if a given context (this) contains the value
     * @param {*} val
     * @return {Boolean}
     */
    compare = function( val ){
      return this.indexOf( val ) !== -1; 
    };

console.log( bar.some( compare, foo ) ); // true