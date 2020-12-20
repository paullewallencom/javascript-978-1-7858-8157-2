/** @module foo */
var foo = (function () {
      "use strict";
           /**
            * @type {Object}
            */
         var foo = {
             /**
              * @public
              * @type {String}
              */
             baz: "baz"
           };
       return foo;
    }()),
    /** @module bar */
    bar = (function( foo ){
      "use strict";
      foo.qux = "qux";
    }( foo || {} ));

console.log( foo.baz ); // baz
console.log( foo.qux ); // qux