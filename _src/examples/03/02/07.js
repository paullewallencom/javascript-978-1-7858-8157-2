/**
 * Learning Fetch API #1
 */
fetch( "/rest/foo" ).then(function( response ) {
	// Convert to JSON
	return response.json();
}).catch(function( err ) {
	console.error( err );
});