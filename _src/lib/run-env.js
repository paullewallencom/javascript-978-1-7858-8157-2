
var $console = document.body;
window.console.log = function(){
  var msg = [].slice.call( arguments ).join( ", " );
  var $p = document.createElement( "pre" );
  $p.innerHTML = [ "<code>", msg, "</code>" ].join( "" );
  $console.appendChild( $p );
};
