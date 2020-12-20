/**
 * Control over unknown properties via Proxy
 */
"use strict";
/**
 * Custom storage
 */
var myStorage = {
      /** @type {Object} key-value object */
      data: {},
      /**
       * Getter
       * @param {String} key
       * @returns {*}
       */
      getItem: function( key ){
        return this.data[ key ];
      },
      /**
       * Setter
       * @param {String} key
       * @param {*} val
       */
      setItem: function( key, val ){
        this.data[ key ] = val;
      }
    },
    /**
     * Storage proxy
     * @type {Proxy}
     */
    storage = new Proxy( myStorage, {
      /**
       * Proxy getter
       * @param {myStorage} storage
       * @param {String} key
       * @returns {*}
       */
      get: function ( storage, key ) {
        return storage.getItem( key );
      },
      /**
       * Proxy setter
       * @param {myStorage} storage
       * @param {String} key
       * @param {*} val
       * @returns {void}
       */
      set: function ( storage, key, val ) {
        return storage.setItem( key, val );
    }});

storage.bar = "bar";
console.log( myStorage.getItem( "bar" ) ); // bar
myStorage.setItem( "bar", "baz" );
console.log( storage.bar ); // baz