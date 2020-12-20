/**
 * Learning Fetch API #5
 */
var form = document.querySelector( "form[data-bind=foo]" );
fetch( "/feedback/submit", {
	method: "post",
	body: new FormData( form )
});