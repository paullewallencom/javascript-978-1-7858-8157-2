/**
 * Function parameter default value
 */

function fn( foo ) {
  return foo || "Default value";
}

console.log( fn( "My value" ) ); // My value
console.log( fn() ); // Default value
