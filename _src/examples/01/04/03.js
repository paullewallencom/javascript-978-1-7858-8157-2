/**
 * Traversing object via for...in safe
 */
"use strict";
Object.prototype.baz = "baz";
var options = {
     bar: "bar",
     foo: "foo"
    },
    key;
for( key in options ) {
  if ( options.hasOwnProperty( key ) ) {
    console.log( key, options[ key] );
  }
}

