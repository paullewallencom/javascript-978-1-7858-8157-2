/**
 * find example
 */
"use strict";
var data = [ "bar", "fo", "baz", "qux" ],
    match = function( val ){
      return val.length < 3;
    };
console.log( data.find( match ) ); // fo