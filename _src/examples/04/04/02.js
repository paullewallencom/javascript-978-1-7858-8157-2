/**
 * WebSockets API
 */
var rtm = new WebSocket("ws://echo.websocket.org");
rtm.onopen = function(){
  console.log( "Connection established" );
  rtm.send("hello");
};
rtm.onclose = function(){
  console.log( "Connection closed" );
};
rtm.onmessage = function( e ){
  console.log( "Received:", e.data );
};
rtm.onerror = function( e ){
  console.error( "Error: " + e.message );
};