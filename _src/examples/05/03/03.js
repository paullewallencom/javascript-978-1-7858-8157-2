/**
 * Piping callbacks for queuing asynchronous tasks
 */
"use strict";
    /**
     * Increment a given value
     * @param {Number} val
     * @returns {Promise}
     */
var foo = function( val ) {
      /**
       * Return a promise.
       * @param {Function} resolve
       * @param {Function} reject
       */
      return new Promise(function( resolve, reject ) {
        if ( !val ) {
          return reject( new RangeError( "Value must be greater than zero" ) );
        }
        setTimeout(function(){
          resolve( val + 1 );
        }, 0 );
      });
    };


foo( 1 ).then(function( val ){
  // chaining async call
  return foo( val );
}).then(function( val ){
  // transforming output
  return val + 2;
}).then(function( val ){
  console.log( "Result: ", val );
}).catch(function( err ){
  console.error( "Error caught: ", err.message );
});

// Result: 5