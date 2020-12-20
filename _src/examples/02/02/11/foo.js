System.register([], function (_export) {
  "use strict";

  var bar, baz;
  return {
    setters: [],
    execute: function () {
      bar = "bar";

      _export("bar", bar);

      baz = "baz";

      _export("baz", baz);
    }
  };
});