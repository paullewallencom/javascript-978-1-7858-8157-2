/**
 * Modifying external stylesheets
 */
var stylesheet = document.styleSheets[ 0 ];
stylesheet.addRule( ".foo::before", "color: green" );
// or
stylesheet.insertRule( ".foo::before { color: green }", 0 );