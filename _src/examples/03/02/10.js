/**
 * Learning Fetch API #4
 */
var form = document.querySelector( "form[data-bind=foo]" ),
    inputEmail = form.querySelector( "[name=email]" ),
    inputPassword = form.querySelector( "[name=pwd]" );

fetch( "/feedback/submit", {
	method: "post",
	body: JSON.stringify({
		email: inputEmail.value,
		answer: inputPassword.value
	})
});