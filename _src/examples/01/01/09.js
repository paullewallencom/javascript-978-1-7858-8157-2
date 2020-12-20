/**
 * Use of rest operator fallback
 */
"use strict";
var cb = function() {
  // all available parameters into an array
  var args = [].slice.call( arguments ),
      // the first array element to foo and shift
      foo = args.shift(),
      // the new first array element to bar and shift
      bar = args.shift();
  console.log( foo, bar, args );
};
cb( "foo", "bar", 1, 2, 3 ); // foo bar [1, 2, 3]

