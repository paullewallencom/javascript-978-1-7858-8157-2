/**
 * Getting computed styles
 */
var el = document.querySelector( "h1" ),
    css = window.getComputedStyle( el, null );
console.log( css.getPropertyValue( "font-family" ) );