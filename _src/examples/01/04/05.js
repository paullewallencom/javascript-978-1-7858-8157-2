/**
 * Convert array-like object to array
 */
"use strict";
var nodes = document.querySelectorAll( "div" ),
    arr = Array.prototype.slice.call( nodes );

arr.forEach(function(i){
  console.log(i);
});
