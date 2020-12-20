/**
* Convert NodeList into array
*/
var ul = document.querySelector( "[data-bind=\"bar\"]" ),
      lis = ul.querySelectorAll( "[data-bind=\"item\"]" );
console.log( [].slice.call( lis ) ); // into array ES5 way
console.log( [ ...lis ] ); // into array ES6 way