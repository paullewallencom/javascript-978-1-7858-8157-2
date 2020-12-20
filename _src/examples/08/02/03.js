/**
 * console.profile/console.timeEnd example
 */
"use strict";
var cpuExpensiveOperation = function(){
      var i = 100000;
      while( --i ) {
        document.body.appendChild( document.createElement( "div" ) );
      }
    };

console.profile( "cpuExpensiveOperation" );
cpuExpensiveOperation();
console.profileEnd( "cpuExpensiveOperation" );

