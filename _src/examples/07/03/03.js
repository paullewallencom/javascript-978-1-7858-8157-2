/**
 * Helper that opens DevTools by pressing Ctrl-Shift-i
 */
var gui = require( "nw.gui" ),
    /** @type {Window} */
    appWin = gui.Window.get();

console.info( "Here we go!" );

document.addEventListener( "keydown", function( e ){
  var key = parseInt( e.key || e.keyCode, 10 );
  // Ctrl-Shift-i
  if ( e.ctrlKey && e.shiftKey && key === 73 ) {
    e.preventDefault();
    appWin.showDevTools();
  }
}, false );