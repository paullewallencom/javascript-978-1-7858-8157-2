/**
 * Use of rest operatorwith function parameters
 */
let cb = function( foo, bar, ...args ) {
  console.log( foo, bar, args );
}
cb( "foo", "bar", 1, 2, 3 ); // foo bar [1, 2, 3]

