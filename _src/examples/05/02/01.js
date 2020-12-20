/**
 * Error First Callback
 */
fs.readFile( "foo.txt", function ( err, data ) {
  if ( err ) {
    console.error( err );
  }
  console.log( data );
});