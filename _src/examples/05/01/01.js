/**
 * Non-blocking function invokation example
 */
function foo(){
  console.log( "Calling Foo" );
}
function bar(){
  console.log( "Calling Bar" );
  baz();
}
function baz(){
  console.log( "Calling Baz" );
}
setTimeout(foo, 0 );
bar();