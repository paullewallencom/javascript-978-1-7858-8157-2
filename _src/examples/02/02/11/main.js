System.register(["./foo"], function (_export) {
  "use strict";

  var bar, baz;
  return {
    setters: [function (_foo) {
      bar = _foo.bar;
      baz = _foo.baz;
    }],
    execute: function () {
      console.log(bar); // bar
      console.log(baz); // baz
    }
  };
});