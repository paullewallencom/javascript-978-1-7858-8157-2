/**
 * console.timeStamp example
 */
"use strict";
var cpuExpensiveOperation = function(){
      var i = 100000;
      while( --i ) {
        document.body.appendChild( document.createElement( "div" ) );
      }
    };

cpuExpensiveOperation();
console.timeStamp( "cpuExpensiveOperation finished" );

