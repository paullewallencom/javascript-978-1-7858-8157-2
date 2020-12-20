/**
 * Traversing Collection
 */
"use strict";
let map = new Map()
  .set( "bar", "bar" )
  .set( "foo", "foo" ),
    pair;
for ( pair of map ) {
  console.log( pair );
}

// OR
let map = new Map([
    [ "bar", "bar" ],
    [ "foo", "foo" ],
]);
map.forEach(function( value, key ){
  console.log( key, value );
});
