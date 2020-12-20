/**
 * Debounce example
 */
/**
   * Invoke a given callback only after this function stops being called `wait` milliseconds
   * usage:
   * debounce( cb, 500 )( ..arg );
   *
   * @param {Function} cb
   * @param {Number} wait
   * @param {Object} thisArg
   */
  function debounce ( cb, wait, thisArg ) {
    /**
     * @type {number}
     */
    var timer = null;
    return function() {
      var context = thisArg || this,
          args = arguments;
      window.clearTimeout( timer );
      timer = window.setTimeout(function(){
        timer = null;
        cb.apply( context, args );
      }, wait );
    };
  }

// Usage
var TOP_OFFSET = 200;
// Lazy-loading
window.addEventListener( "scroll", debounce(function(){
  var scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  if ( scroll >= TOP_OFFSET ){
     console.log( "Load the deferred widget (if not yet loaded)" );
  }
}, 20 ));