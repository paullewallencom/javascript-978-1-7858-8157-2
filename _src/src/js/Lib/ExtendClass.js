  "use strict";
  var propIsEnumerable = Object.prototype.propertyIsEnumerable,

      toObject = function( val ) {
        if ( val === null ) {
          throw new TypeError( "Object.assign cannot be called with null or undefined" );
        }
        return Object( val );
      },

      ownEnumerableKeys = function( obj ) {
        var keys = Object.getOwnPropertyNames( obj );
        if ( Object.getOwnPropertySymbols ) {
          keys = keys.concat( Object.getOwnPropertySymbols( obj ) );
        }
        return keys.filter(function ( key ) {
          return propIsEnumerable.call( obj, key );
        });
      },

      assign = function ( target ) {
        var from,
            keys,
            to = toObject( target ),
            s = 1,
            len = arguments.length,
            i;

        for ( ; s < len; s++ ) {
          from = arguments[ s ];
          keys = ownEnumerableKeys( Object( from ) );
          i = 0;
          for ( ; i < keys.length; i++ ) {
            to[ keys[ i ] ] = from[ keys[ i ] ];
          }
        }
        return to;
      },

      // derived from https://raw.githubusercontent.com/SBoudrias/class-extend/master/index.js

      hasOwnProp = Object.prototype.hasOwnProperty,
      /**
       * Extend this Class to create a new one inherithing this one.
       * Also add a helper __super__ object poiting to the parent prototypes methods
       * @param  {Object} protoProps  Prototype properties (available on the instances)
       * @param  {Object} staticProps Static properties (available on the contructor)
       * @return {Object}             New sub class
       */
      extend = function( protoProps, staticProps ) {
        var parent = this,
            child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if ( protoProps && hasOwnProp.call( protoProps, "constructor" )) {
          child = protoProps.constructor;
        } else {
          child = function(){
            return parent.apply( this, arguments );
          };
        }

        // Add static properties to the constructor function, if supplied.
        assign( child, parent, staticProps );

        // Set the prototype chain to inherit from `parent`
        child.prototype = Object.create( parent.prototype, {
          constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if ( protoProps ) {
          assign( child.prototype, protoProps );
        }

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
      },
      Base = function(){};

Base.extend = extend;
module.exports = Base;