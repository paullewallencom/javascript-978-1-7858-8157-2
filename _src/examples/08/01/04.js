/**
 * console.count example
 */
function factory( constr ){
  console.count( "Factory is called for " + constr );
  // return new window[ constr ]();
}
factory( "Foo" );
factory( "Bar" );
factory( "Foo" );