var Base = require( "../Lib/ExtendClass" ),

    /**
     * @class
     */
    ViewDesktop = Base.extend({
      /**
       * @constructs ViewDesktop
       */
      constructor: function(){
        this.$button = document.querySelector( "[data-bind=\"run\"]" );
        this.$link = document.querySelector( "[data-bind=\"link\"]" );
        this.$src = document.querySelector( "[data-bind=\"src\"]" );
        this.$exec = document.querySelector( "[data-bind=\"exec\"]" );
      },

      reset: function(){
        this.$src.innerHTML = "";
      },

      /**
       *
       * @param {String} name
       * @param {String} id
       * @param {String} [demo]
       * @param {String} [es6]
       */
      load: function( name, id, demo, es6, run ){
        var html = document.getElementById( id ).innerHTML;

        this.$src.innerHTML += [
          "<h3>",
          name.replace( /^\d{2}\//, "" ),
          "</h3><pre><code class=\"javascript\">",
          html,
          "<\/script>"
          ].join( "\n" );
        this.$button.classList.toggle( "is-hidden", demo === null || run );
        this.$link.classList.toggle( "is-hidden", es6 !== "6" );
        this.$exec.classList.toggle( "is-hidden", demo === null || run );
        this.$exec.src = "";
        this.$button.href = demo;
      },


      onExecLoad: function(){
        var $doc = this.$exec.contentDocument || this.$exec.contentWindow.document;
        this.$console = $doc.body.querySelector( "[data-bind=\"console\"]" );
      }
    });

module.exports = ViewDesktop;