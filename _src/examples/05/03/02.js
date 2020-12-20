"use strict";
/**
 * Make GET request
 * @param {String} url
 * @returns {Promise}
 */
function ajaxGet( url ) {
  return new Promise(function( resolve, reject ) {
    var req = new XMLHttpRequest();
    req.open( "GET", url );
    req.onload = function() {
      // If response status isn't 200 something went wrong
      if ( req.status !== 200 ) {
        // Early exit
        return reject( new Error( req.statusText ) );
      }
      // Everything is ok, we can resolve the promise
      return resolve( JSON.parse( req.responseText ) );
    };
    // On network errors
    req.onerror = function() {
      reject( new Error( "Network Error" ) );
    };
    // Make the request
    req.send();
  });
};

ajaxGet("http://www.telize.com/jsonip").then(function( data ){
  console.log( "Your IP is ", data.ip );
}).catch(function( err ){
  console.error( err );
});
// Your IP is 127.0.0.1

