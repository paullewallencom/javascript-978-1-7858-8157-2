/**
 * Convert array-like object to array via Array.from
 */
"use strict";
var nodes = document.querySelectorAll( "div" ),
    arr = Array.from( nodes );

arr.forEach(function(i){
  console.log(i);
});
