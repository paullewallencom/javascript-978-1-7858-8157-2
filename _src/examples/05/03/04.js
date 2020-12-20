/**
 * Parallel processes with Promise API
 */
"use strict";
    /**
     * Increment a given value
     * @param {Number} val
     * @returns {Promise}
     */
var foo = function( val ) {
      return new Promise(function( resolve ) {
        setTimeout(function(){
          resolve( val + 1 );
        }, 100 );
      });
    },
    /**
     * Increment a given value
     * @param {Number} val
     * @returns {Promise}
     */
    bar = function( val ) {
      return new Promise(function( resolve ) {
        setTimeout(function(){
          resolve( val + 2 );
        }, 200 );
      });
    };

Promise.all([ foo( 1 ), bar( 2 ) ]).then(function( arr ){
  console.log( arr );
});
//  [2, 4]