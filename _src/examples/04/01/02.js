/**
 * Web Storage API (getters/setters)
 */
var storage = isPersistent ? localStorage : sessionStorage;
storage.foo = "Foo";
console.log( storage.foo );
delete storage.foo;
