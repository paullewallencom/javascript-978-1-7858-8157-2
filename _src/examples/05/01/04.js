/**
 * Catching exceptions in synchronous flow
 */
function foo(){
  throw new Error( "Foo throws an error" );
}
try {
  foo();
} catch( err ) {
  console.log( "The error is caught" );
}
