/**
 * Collectio Set
 */
"use strict";
let foo = new Set();
foo.add( 1 );
foo.add( 1 );
foo.add( 2 );
console.log( Array.from( foo ) ); // [ 1, 2 ]

let foo = new Set(),
    bar = function(){ return "bar"; };
foo.add( bar );
console.log( foo.has( bar ) ); // true
