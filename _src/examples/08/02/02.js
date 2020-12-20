/**
 * console.time/console.timeEnd example
 */
"use strict";
var cpuExpensiveOperation = function(){
      var i = 100000;
      while( --i ) {
        document.body.appendChild( document.createElement( "div" ) );
      }
    };

console.time( "cpuExpensiveOperation took" );
cpuExpensiveOperation();
console.timeEnd( "cpuExpensiveOperation took" );
