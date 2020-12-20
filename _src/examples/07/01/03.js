/**
 * File I/O operations in node.js
 */
"use strict";
var fs = require( "fs" );
fs.readFile( __filename, "UTF-8", function( err, data ){
  if ( err ) {
    throw new Error( err );
  }
  console.log( "Source of ", __filename, ":\n", data );
});