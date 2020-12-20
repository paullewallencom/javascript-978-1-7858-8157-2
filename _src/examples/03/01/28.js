/**
 * Trigger a DOM event
 */
var btn = document.querySelector( "button" ),
    // Create Event object
    event = document.createEvent( "HTMLEvents" );
// Initialize a custom event that bubbles up and cannot be canceled

event.initEvent( "click", true, false );
// Dispatch the event
btn.dispatchEvent( event );
