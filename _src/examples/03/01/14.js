/**
 * Styling DOM
 */
el.classList.add( "is-hidden" );
el.classList.remove( "is-hidden" );
var isAvailable = true;
el.classList.toggle("is-hidden", !isAvailable );
if ( el.classList.contains( "is-hidden" ) ){}