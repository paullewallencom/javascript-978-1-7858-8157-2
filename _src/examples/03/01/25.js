/**
 * Subscribe for keypress event
 */
addEventListener( "keydown", function( e ){
    var key = parseInt( e.key || e.keyCode, 10 );
     // Ctrl-Shift-i
    if ( e.ctrlKey && e.shiftKey && key === 73 ) {
      e.preventDefault();
      alert( "Ctrl-Shift-L pressed" );
    }
  }, false );