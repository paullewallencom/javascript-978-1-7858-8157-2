/**
 * Syntactic sugar: lexical this
 */
"use strict";
/**
 * @class View
 */
let View = function(){
  let button = document.querySelector( "[data-bind=\"btn\"]" );
  /**
   * Handle button clicked event
   * @private
   */
  this.onClick = function(){
    console.log( "Button clicked" );
  };
  button.addEventListener( "click", () => {
    // we can safely refer surrounding object members
    this.onClick();
  }, false );
}
