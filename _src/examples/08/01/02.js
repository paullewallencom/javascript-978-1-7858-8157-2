/**
 * Styling console.log  example
 */
console.log.user = function(){
  var args = [].slice.call( arguments );
  args.splice( 0, 0, "%c USER ",
    "background-color: #7DB4B5; border-radius: 3px; color: #fff; font-weight: bold; " );
  console.log.apply( console, args );
};

console.log.event = function(){
  var args = [].slice.call( arguments );
  args.splice( 0, 0, "%c EVENT ",
    "background-color: #f72; border-radius: 3px; color: #fff; font-weight: bold; " );
  console.log.apply( console, args );
};
console.log( "Generic log record" );
console.log.user( "User click button Foo" );
console.log.event( "Bar triggers `Baz` event on Qux" );