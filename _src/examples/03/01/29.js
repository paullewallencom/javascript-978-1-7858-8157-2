/**
 * Trigger a custom event
 */
var btn = document.querySelector( "button" ),
    // Create Event object
    event = document.createEvent( "CustomEvent" );
// Subscribe to the event
btn.addEventListener("my-event", function( e ){
  console.dir( e );
});
// Initialize a custom event that bubbles up and cannot be canceled
event.initEvent( "my-event", true, false );
// Dispatch the event
btn.dispatchEvent( event );