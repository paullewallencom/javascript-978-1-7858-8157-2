"use strict";

class EventEmitter {
  /** Initialize */
  constructor() {
    /**
    * @access private
    * @type {EventHandler[]}
    */
   this.handlers = [];
  }
 /**
  * Subscribe a cb handler for a given event in the object scope
  * @param {String} ev
  * @param {Function} cb
  * @param {Object} [context]
  * @returns {EventEmitter}
  */
  on( ev, cb, context ){
     this.handlers.push({
       event: ev,
       callback: cb,
       context: context
     });
     return this;
  }
/**
  * Emit a given event in the object
  * @param {String} ev
  * @param {...*} [arg]
  * @returns {EventEmitter}
  */
  trigger( ev, ...args ) {
    this.handlers.forEach(function( evObj ){
     if ( evObj.event !== ev || !evObj.callback.apply ) {
       return;
     }
     evObj.callback.apply( evObj.context || this, args );
   }, this );
   return this;
  }
}

window.mediator = new EventEmitter();