/**
 * Immutable property via Object.defineProperty
 */
"use strict";
var bar = {};

Object.defineProperty( bar, "length", {
  /**
   * Data descriptor
   * @type {*}
   */
  value: 0,
  /**
   * Data descriptor
   * @type {Boolean}
   */
  writable: false
});

bar.length = 10; // TypeError: "length" is read-only