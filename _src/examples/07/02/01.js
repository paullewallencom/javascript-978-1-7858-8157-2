/**
 * Nodejs-based web-server example
 */
"use strict";
    /** @type {module:http}  */
var http = require( "http" ),
    /** @type {HttpServer}  */
    server = http.createServer(function( request, response ) {
      response.writeHead( 200, {"Content-Type": "text/html"} );
      response.write( "<h1>Requested: " + request.url + "</h1>" );
      response.end();
    });

server.listen( 80 );
console.log( "Server is listening..." );