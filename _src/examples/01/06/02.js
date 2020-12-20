/**
 *
 * Getters and setters via Object.defineProperty
 */
"use strict";
var bar = {
  /** @type {[Number]} */
  arr: [ 1, 2 ]
};

Object.defineProperty( bar, "length", {
  /**
   * Getter
   * @returns {Number}
   */
  get: function() {
    return this.arr.length;
  },
  /**
   * Setter
   */
  set: function() {
    throw new SyntaxError( "Cannot assign to read only property 'length'" );
  }
});

console.log ( bar.length ); // 2
bar.arr.push( 3 );
console.log ( bar.length ); // 3
bar.length = 10; // SyntaxError: Cannot assign to read only property 'length'