/**
 * Parallel with async.js
 */
async.parallel([
    function( cb ){
      setTimeout( function(){
        console.log( "foo is complete" );
        cb( null, "foo" );
      }, 10 );
    },
    function( cb ){
      setTimeout( function(){
        console.log( "bar is complete" );
        cb( null, "bar" );
      }, 0 );
    },
    function( cb ){
      setTimeout( function(){
        console.log( "baz is complete" );
        cb( null, "baz" );
      }, 20 );
    }
], function( err, results ){
   if ( err ) {
     return console.error( err );
   }
   console.log( "All done:", results );
});

// bar is complete
// foo is complete
// baz is complete
// All done: [ 'foo', 'bar', 'baz' ]