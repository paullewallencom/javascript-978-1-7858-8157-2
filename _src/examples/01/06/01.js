/**
 *
 * Getters and setters
 */
"use strict";
var bar = {
  /** @type {[Number]} */
  arr: [ 1, 2 ],
  /**
   * Getter
   * @returns {Number}
   */
  get length () {
    return this.arr.length;
  },
  /**
   * Setter
   * @param {*} val
   */
  set length ( val ) {
    throw new SyntaxError( "Cannot assign to read only property 'length'" );
  }
};
console.log ( bar.length ); // 2
bar.arr.push( 3 );
console.log ( bar.length ); // 3
bar.length = 10; // SyntaxError: Cannot assign to read only property 'length'

