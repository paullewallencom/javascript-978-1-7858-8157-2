/**
 * performance.now example
 */
"use strict";
var cpuExpensiveOperation = function(){
      var i = 100000;
      while( --i ) {
        document.body.appendChild( document.createElement( "div" ) );
      }
    },
    // Start test time
    s = performance.now();

cpuExpensiveOperation();
console.log( "Process took", performance.now() - s, "ms" );