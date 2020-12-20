/**
 * Use of spread operator
 */
let args = [ 2015, 6, 17 ],
    relDate = new Date( ...args );
console.log( relDate.toString() );  // Fri Jul 17 2015 00:00:00 GMT+0200 (CEST)
