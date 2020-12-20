/**
 * Traversing object via for...in
 */
"use strict";
var options = {
     bar: "bar",
     foo: "foo"
    },
    key;
for( key in options ) {
  console.log( key, options[ key] );
}