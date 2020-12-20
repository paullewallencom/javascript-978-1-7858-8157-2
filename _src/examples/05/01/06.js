/**
 * PubSub implementation in EventTarget interface
 */
var el = document.createElement( "div" );
    event = new CustomEvent( "foo", { detail: "foo data" });
el.addEventListener( "foo", function( e ){
  console.log( "Foo event captured: ", e.detail );
}, false );

el.dispatchEvent( event );

// Foo event captured: foo data