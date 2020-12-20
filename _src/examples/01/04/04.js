/**
 * Traversing object via Object.keys()
 */
"use strict";
var options = {
     bar: "bar",
     foo: "foo"
    };
Object.keys( options ).forEach(function( key ){
  console.log( key, options[ key] );
});
