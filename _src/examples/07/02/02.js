/**
 * Web-server by using serve-static
 */
"use strict";
    /** @type {module:connect}  */
var connect = require( "connect" ),
    /** @type {module:serve-static}  */
    serveStatic = require( "serve-static" );

connect().use( serveStatic( __dirname ) ).listen( 80 );