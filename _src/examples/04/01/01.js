/**
 * Web Storage API
 */
var storage = isPersistent ? localStorage : sessionStorage;
storage.setItem( "foo", "Foo" );
console.log( storage.getItem( "foo" ) );
storage.removeItem( "foo" );