/**
 * Server-Side Events API`
 */
var src = new EventSource( "./sse-server.php" );

src.addEventListener( "open", function() {
   console.log( "Connection opened" );
}, false);

src.addEventListener( "error", function( e ) {
  if ( e.readyState === EventSource.CLOSED ) {
    console.error( "Connection closed" );
  }
}, false );

src.addEventListener( "foo", function( e ) {
  var data = JSON.parse( e.data );
  console.log( "Received from the server:", data );
}, false);