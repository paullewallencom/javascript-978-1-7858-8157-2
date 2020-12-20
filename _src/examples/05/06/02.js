/**
 * Throttling
 */
/**
 * Invoke a given callback every `wait` ms until this function stops being called
 * usage:
 * throttle( cb, 500 )( ..arg );
 *
 * @param {Function} cb
 * @param {Number} wait
 * @param {Object} thisArg
 */
 function throttle( cb, wait, thisArg ) {
  var prevTime,
      timer;
  return function(){
    var context = thisArg || this,
        now = +new Date(),
        args = arguments;

    if ( !prevTime || now >= prevTime + wait ) {
      prevTime = now;
      return cb.apply( context, args );
    }
    // hold on to it
    clearTimeout( timer );
    timer = setTimeout(function(){
      prevTime = now;
      cb.apply( context, args );
    }, wait );
  };
}

// Usage
document.body.addEventListener( "mousemove", throttle(function( e ){
  console.log( "The cursor is within the element at ", e.pageX, ",", e.pageY );
}, 1000 ), false );

// The cursor is within the element at 946 , 715
// The cursor is within the element at 467 , 78
