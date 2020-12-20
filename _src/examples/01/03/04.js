/**
 * reduce/reduceRight example
 */
"use strict";
var data = [[ 0, 1 ], [ 2, 3 ], [ 4, 5 ]],
    arr = data.reduce(function( prev, cur ) {
      return prev.concat( cur );
    }),
    arrReverse = data.reduceRight(function( prev, cur ) {
      return prev.concat( cur );
    });

console.log( arr ); //  [0, 1, 2, 3, 4, 5]
console.log( arrReverse ); // [4, 5, 2, 3, 0, 1]