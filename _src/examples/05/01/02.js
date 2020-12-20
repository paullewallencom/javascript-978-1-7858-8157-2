/**
 * Non-blocking build-in method (Fetch) usage example
 */
function bar(){
  console.log( "Bar complete" );
}
fetch( "http://www.telize.com/jsonip" ).then(function( response ) {
  console.log( "Fetch complete" );
});
bar();