/**
 * Continuation-passing style example
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
       */
      return new Promise(function( resolve ) {
        setTimeout(function(){
          resolve( val + 1 );
        }, 0 );
      });
    };

foo( 1 ).then(function( val ){
  console.log( "Result: ", val );
});

// Result: 5
