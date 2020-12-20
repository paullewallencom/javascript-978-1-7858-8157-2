/**
 * IndexDB with Dexie 
 */
var db = new Dexie( "Cem" );
// Define DB
db.version( 3 )
  .stores({ employees: "name, email" });

// Open the database
db.open().catch(function( err ){
  alert( "Opps, something went wrong: " + err );
});

// Populate objectStore with test data
db.employees.add({ name: "John Dow", email: "john@company.com" });
db.employees.add({ name: "Don Dow", email: "don@company.com" });

// Find an employee by email
db.employees
  .where( "email" )
  .equals( "don@company.com" )
  .each(function( employee ){
    console.log( "Employee matching `don@company.com` is `" + employee.name + "`" );
  });