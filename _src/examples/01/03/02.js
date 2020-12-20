/**
 * map example
 */
"use strict";
var data = { bar: "bar bar", foo: "foo foo" },
    // convert key-value array into url-encoded string
    urlEncStr = Object.keys( data ).map(function( key ){
      return key + "=" + window.encodeURIComponent( data[ key ] );
    }).join( "&" );

console.log( urlEncStr ); // bar=bar%20bar&foo=foo%20foo