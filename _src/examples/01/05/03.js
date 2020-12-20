/**
 * Declaring object type with private members
 */
"use strict";
 /**
  * @class
  */
 var Constructor = function(){
      /**
      * @type {String}
      * @private
      */
      var baz = "baz";
      return {
        /**
        * @type {String}
        * @public
        */
        bar: "bar",
        /**
        * @public
        * @returns {String}
        */
        foo: function() {
         return this.bar + " " + baz;
        }
      };
    },
    /** @type Constructor */
    instance = new Constructor();


console.log( instance.foo() ); // bar baz
console.log( instance.hasOwnProperty( "baz") ); // false
console.log( Constructor.prototype.hasOwnProperty( "baz") ); // false
console.log( instance instanceof Constructor ); // false