/**
 * Most popular PubSub API
 */
obj.on( "foo", function( data ){
  console.log( "Foo event captured: ", data );
});
obj.trigger( "foo", "foo data" );