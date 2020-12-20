/**
 * Reload an element
 */
function reload( el ) {
    var elClone = el.cloneNode( true );
    el.parentNode && el.parentNode.replaceChild( elClone, el );
 }