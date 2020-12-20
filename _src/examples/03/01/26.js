/**
 * Safe way invoke a callback when DOM is ready
 */
function ready( cb ) {
  if ( document.readyState !== "loading" ){
    cb();
  } else {
    document.addEventListener( "DOMContentLoaded", cb );
  }
}