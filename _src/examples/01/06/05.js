/**
 * Control over static property
 */
"use strict";

class Bar {
    /**
     * @static
     * @returns {String}
     */
    static get baz() {
        return "baz";
    }
}

console.log( Bar.baz ); // baz