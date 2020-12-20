/**
 * Resize image
 */
"use strict";
    /** @type {module:gm} */
var gm = require( "gm" );

// resize the image
gm( "/path/img.jpg" )
  .resize( 200, 200 )
  .write( "/path/resized.png", function ( err ) {
    if ( err ) {
      throw new Error( err );
    }
    console.log( "Done" );
  });