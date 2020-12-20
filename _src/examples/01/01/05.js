/**
 * Fat-arrow function without return
 */
// filter all the array elements greater than 2
var res = [ 1, 2, 3, 4 ].filter(function( v ){
  return v > 2;
});
console.log( res ); // [3,4]
