/**
 * IndexDB usage example
 */

/**
 * @type {IDBOpenDBRequest}
 */
var request = indexedDB.open( "Cem", 2 );

/** Report error */
request.onerror = function() {
  alert( "Opps, something went wrong" );
};
/**
 * Create DB
 * @param {Event} e
 */
request.onupgradeneeded = function ( e ) {
  var objectStore;
  if ( e.oldVersion ) {
    return;
  }
  // define schema
  objectStore = e.currentTarget.result.createObjectStore( "employees", { keyPath: "email" });
  objectStore.createIndex( "name", "name", { unique: false } );
   // Populate objectStore with test data
  objectStore.add({ name: "John Dow", email: "john@company.com" });
  objectStore.add({ name: "Don Dow", email: "don@company.com" });
};
/**
 * Find a row from the DB
 * @param {Event} e
 */
request.onsuccess = function( e ) {
  var db = e.target.result,
      req = db.transaction([ "employees" ]).objectStore( "employees" ).get( "don@company.com" );

  req.onsuccess = function() {
    console.log( "Employee matching `don@company.com` is `" + req.result.name + "`" );
  };
};