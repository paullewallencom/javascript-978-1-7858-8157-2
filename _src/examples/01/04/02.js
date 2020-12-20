/**
 * Traversing object via for...in not safe
 */
"use strict";
Object.prototype.baz = "baz";
var options = {
     bar: "bar",
     foo: "foo"
    },
    key;
for( key in options ) {
  console.log( key, options[ key] );
}
