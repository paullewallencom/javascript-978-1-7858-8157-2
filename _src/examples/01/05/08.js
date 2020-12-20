/**
 * Declaring object type with ExtendClass
 * @requires ./lib/ExtendClass.js
 */
"use strict";
    /**
     * @class
     */
var SuperType = Base.extend({
      /**
       * @pulic
       * @returns {String}
       */
      foo: function(){ return "foo public"; },
      /**
       * @constructs SuperType
       */
      constructor: function () {}
    }),
    /**
     * @class
     */
    Constructor = SuperType.extend({
      /**
       * @pulic
       * @returns {String}
       */
      bar: function(){ return "bar public"; }
    }, {
      /**
       * @static
       * @returns {String}
       */
      bar: function(){ return "bar static"; }
    }),
    /** @type Constructor */
    instance = new Constructor();

console.log( instance.foo() ); // foo public
console.log( instance.bar() ); // bar public
console.log( Constructor.bar() ); // bar static
console.log( instance instanceof Constructor ); // true
console.log( instance instanceof SuperType ); // true