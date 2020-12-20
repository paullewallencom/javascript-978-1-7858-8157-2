/**
 * Collection Map
 */
"use strict";
/**
 * @class
 * @param {HTMLElement} el
 */
let El = function( el ){
  this.el = el;
  this.map = new Map();
};
/**
 * Subscribe a handler on event
 * @param {String} event
 * @param {Function} cb
 * @param {Object} context
 */
El.prototype.on = function( event, cb, context ){
  let handler = cb.bind( context || this );
  this.map.set( [ event, cb ], handler );
  this.el.addEventListener( event, handler, false );
};
/**
 * Unsubscribe a handler on event
 * @param {String} event
 * @param {Function} cb
 */

El.prototype.off = function( event, cb ){
  let handler = cb.bind( context ),
      key = [ event, handler ];
  if ( this.map.has( key ) ) {
    this.el.removeEventListener( event, this.map.get( key ) );
    this.map.delete( key );
  }
};

