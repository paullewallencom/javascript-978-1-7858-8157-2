/**
 * Catching exceptions in asynchronous flow
 */
function foo(){
  throw new Error( "Foo throws an error" );
}
try {
  setTimeout(foo, 0 );
} catch( err ) {
  console.log( "The error is caught" );
}