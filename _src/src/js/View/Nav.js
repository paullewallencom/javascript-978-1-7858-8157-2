var Base = require( "../Lib/ExtendClass" ),
    /**
     * @class
     */
    ViewNav = Base.extend({
       /**
       * @constructs ViewNav
       * @param {Object} options - key-value
       */
      constructor: function( options ) {
        this.links = [].slice.call( document.querySelectorAll( "[data-bind=\"nav\"] a[href]" ) );
        this.desktopView = options.desktopView;
        this.links.forEach(function ( el ) {
          el.addEventListener( "click", this.onLinkClick.bind( this ), false );
        }, this );
      },
      /**
       * Handle click on a link
       * @private
       * @param {Event} e
       * @returns {void}
       */
      onLinkClick: function ( e ) {
        var list;
        e.preventDefault();
        this.desktopView.reset();
        if ( e.target.dataset.composite ) {
          e.target.dataset.composite.split( ";" ).forEach(function( payload ){
            var pairs = payload.split( "|" );
            this.desktopView.load( pairs[ 1 ],
              pairs[ 0 ], null, null );
          }, this );
        } else  {
          this.desktopView.load( e.target.dataset.name,
            e.target.dataset.id, e.target.dataset.demo || null, e.target.dataset.es || null,
            e.target.dataset.run || null );
        }

        list = [].slice.call( document.querySelectorAll( "pre code" ) );
        list.forEach(function( el ) {
          window.hljs.highlightBlock( el );
        });

        this.links.forEach(function ( el ) {
          el.classList.toggle( "is-active", false );
        }, this );
        e.target.classList.toggle( "is-active", true );
      }
    });

module.exports = ViewNav;