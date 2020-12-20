/**
 * ajax via https://github.com/Raynos/xhr
 */
xhr({
  uri: "http://www.telize.com/jsonip",
  headers: {
    "Content-Type": "application/json"
  }
}, function ( err, resp ) {
  console.log( resp );
});