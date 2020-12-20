/**
 * XHR usage example
 */
var xhr = new XMLHttpRequest();
xhr.open( "GET", "http://www.telize.com/jsonip?callback=0", true );
xhr.onload = function() {
      if ( this.status === 200 ) {
        return console.log( this.response );
      }
    };

xhr.responseType = "json";
xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
xhr.send( null );