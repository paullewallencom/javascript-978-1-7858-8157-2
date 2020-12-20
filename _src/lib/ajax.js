module.exports = (function(){
  var TIMEOUT = 2000,
      subscribeHandlers = function ( xhr, resolve, reject ){
        xhr.onload = function() {
          if ( xhr.status >= 200 && xhr.status < 400 ) {
            resolve( xhr.response, xhr.status );
          } else {
            reject( new Error( "HTTP status error" ) );
          }
        };
        xhr.onerror = function() {
          reject( new Error( "Loading error" ) );
        };
      },
      setHeaders = function( xhr ){
        xhr.timeout = TIMEOUT;
        xhr.responseType = "json";
        xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
      };
  return {
    get: function( url, data ){
      return new Promise(function( resolve, reject ) {
        var xhr = new XMLHttpRequest(),
            params = Object.keys( data ).map(function( key ){
              return key + "=" + window.encodeURIComponent( data[ key ] );
            }).join( "&" );
        xhr.open( "GET", url + params, true );
        subscribeHandlers( xhr, resolve, reject );
        setHeaders( xhr );
        xhr.send();
      });
    },
    post: function( url, data ){
      return new Promise(function( resolve, reject ) {
        var xhr = new XMLHttpRequest();
        xhr.open( "POST", url, true );
        subscribeHandlers( xhr, resolve, reject );
        setHeaders( xhr );
        xhr.send( data );
      });
    }
  };
}());