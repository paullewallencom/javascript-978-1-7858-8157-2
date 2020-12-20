    /**
     * @type {Node}
     */
var $console = document.body.querySelector( "[data-bind=\"console\"]" ),
    /**
     * Copy of initial error handler
     * @type {Object}
     */
    gOldOnError = window.onerror,
      /**
       *
       * @param {String} str
       * @returns {String}
       */
    htmlEntities = function( str ) {
        return String( str )
          .replace( /&/g, "&amp;" )
          .replace( /</g, "&lt;" )
          .replace( />/g, "&gt;" )
          .replace( /"/g, "&quot;" );
    },
     /**
      *
      * @param {*} mixed
      * @returns {String}
      */
    expand = function( mixed ){
      if ( typeof mixed === "object" ) {
        return JSON.stringify( mixed );
      }
      return mixed;
    },
    /**
     * Output into console
     * @param {String} msg
     * @returns {void}
     */
    echo = function( msg ){
      var $p = document.createElement( "pre" );
      $p.innerHTML = [ "<code>", htmlEntities( msg ), "</code>" ].join( "" );
      $console.appendChild( $p );
    };

window.console.log = function(){
  var msg = [].slice.call( arguments ).map( expand ).join( ", " );
  echo( msg );
};

// Override previous handler.
window.onerror = function( msg ) {
  echo( msg );
  // Just let default handler run.
  return false;
};