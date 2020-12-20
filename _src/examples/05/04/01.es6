/**
* Async/Await API example
*/
// Fetch a random joke
function fetchQuote() {
  return fetch( "http://api.icndb.com/jokes/random" )
  .then(function( resp ){
    return resp.json();
  }).then(function( data ){
    return data.value.joke;
  });
}
// Report either a fetched joke or error
async function sayJoke()
{
  try {
    let result = await fetchQuote();
    console.log( "Joke:", result );
  } catch( err ) {
    console.error( err );
  }
}
sayJoke();