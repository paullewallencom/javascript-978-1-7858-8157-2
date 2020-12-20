/**
 * Speeding up by cloning
 */
var target = document.getElementById( "target" ),
    /**
     * Create a complex element
     * @returns {Node}
     */
    createNewElement = function(){
      var div = document.createElement( "div" ),
          span = document.createElement( "span" );
      span.appendChild( document.createTextNode( "Bar" ) );
      div.appendChild( span );
      return div;
    },
    el;

el = createNewElement();
// loop begins
target.appendChild( el.cloneNode( true ) );
// loop ends