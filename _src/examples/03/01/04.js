/**
 * This way live collection makes an infinite loop
 */
var divs = document.querySelectorAll( "div" ), i;
for ( i = 0; i < divs.length; i++ ) {
  document.appendChild( document.createElement( "div" ) );
}