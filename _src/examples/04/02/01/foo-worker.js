"use strict";
var commands = {
  /**
   * Emulate resource-consuming operation
   * @param {Number} delay in ms
   */
  loadCpu: function( delay ) {
    var start = Date.now();
    while (( Date.now() - start ) < delay );
    return "done";
  }
};

self.addEventListener( "message", function( e ) {
  var command;
  if ( commands.hasOwnProperty( e.data.command ) ) {
    command = commands[ e.data.command ];
    return self.postMessage( command( e.data.value ) );
  }
  self.postMessage( "Error: Command not found" );

}, false );