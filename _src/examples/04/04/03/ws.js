/**
 * WebSockets server example
 * run as:
 * node ws.js
 */
/** @type {module:nodejs-websocket} */
var ws = require( "nodejs-websocket" ),
    /** @type {Server} */
    server = ws.createServer(function( conn ) {
        conn.on( "text", function ( str ) {
          console.log( "Received " + str );
          broadcast( str );
        });
    }).listen( 8001 ),
    /**
     * Broadcast message
     * @param {String} msg
     */
    broadcast = function ( msg ) {
      server.connections.forEach(function ( conn ) {
        conn.sendText( msg );
      });
    };