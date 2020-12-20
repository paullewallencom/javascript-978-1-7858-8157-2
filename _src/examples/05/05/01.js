/**
 * Waterflow with async.js
 */
/**
 * Concat given arguments
 * @returns {String}
 */
function concat(){
  var args = [].slice.call( arguments );
  return args.join( "," );
}


async.waterfall([
    function( cb ){
      setTimeout( function(){
        cb( null, concat( "foo" ) );
      }, 10 );
    },
    function( arg1, cb ){
      setTimeout( function(){
        cb( null, concat( arg1, "bar" ) );
      }, 0 );
    },
    function( arg1, cb ){
      setTimeout( function(){
        cb( null, concat( arg1, "baz" ) );
      }, 20 );
    }
], function( err, results ){
   if ( err ) {
     return console.error( err );
   }
   console.log( "All done:", results );
});

// All done: foo,bar,baz