/**
 * Inheriting from prototype with Object.create
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

SuperType.prototype.baz = "baz";
Constructor.prototype = Object.create( SuperType.prototype );
Constructor.prototype.constructor = Constructor;

instance = new Constructor();

console.log( instance.bar ); // bar
console.log( instance.baz ); // baz
console.log( instance.hasOwnProperty( "foo" ) ); // false
console.log( instance instanceof Constructor ); // true
console.log( instance instanceof SuperType ); // true