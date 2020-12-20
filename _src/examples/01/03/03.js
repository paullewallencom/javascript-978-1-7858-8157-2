/**
 * filter example
 */
"use strict";
var data = [ "bar", "foo", "", 0 ],
    // remove all falsy elements
    filtered = data.filter(function( item ){
      return !!item;
    });

console.log( filtered ); // ["bar", "foo"]