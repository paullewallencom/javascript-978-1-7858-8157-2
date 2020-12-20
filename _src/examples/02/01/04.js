/** @module foo */
var foo = (function () {
  "use strict";
       /**
        * @private
        * @type String
        */
   var bar = "bar",
       /**
        * @type {Object}
        */
       foo = {
         /**
          * @public
          * @type {String}
          */
         baz: "baz",
         /**
          * @public
          * @returns {String}
          */
         qux: function() {
           return "qux";
         }
       };
   return foo;
}());

console.log( foo.baz ); // baz
console.log( foo.qux() ); // qux