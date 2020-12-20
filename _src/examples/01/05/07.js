/**
 *
 * Inheriting from prototype with Object.assign
 */
"use strict";
    /**
     * @class
     */
var SuperType = function(){
      /**
      * @type {String}
      * @public
      */
      this.foo = "foo";
    },
    /**
     * @class
     */
    Constructor = function(){
      /**
      * @type {String}
      * @public
      */
      this.bar = "bar";
    },
    /** @type Constructor */
    instance;

Object.assign( Constructor.prototype = new SuperType(), {
  baz: "baz"
});
instance = new Constructor();
console.log( instance.bar ); // bar
console.log( instance.foo ); // foo
console.log( instance.baz ); // baz
console.log( instance instanceof Constructor ); // true
console.log( instance instanceof SuperType ); // true