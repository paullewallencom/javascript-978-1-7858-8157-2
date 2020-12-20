
define([ "./bar", "./baz" ], function ( bar, baz ) {
  "use strict";
  // Construction
  return {
    bar: bar.value,
    baz: baz.value
  };
});
