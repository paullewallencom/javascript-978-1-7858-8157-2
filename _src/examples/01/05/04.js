/**
 * Inheritance with the prototype chain
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

  Constructor.prototype = new SuperType();
  Constructor.prototype.constructor = Constructor;

  instance = new Constructor();
  console.log( instance.bar ); // bar
  console.log( instance.foo ); // foo
  console.log( instance instanceof Constructor ); // true
  console.log( instance instanceof SuperType ); // true
