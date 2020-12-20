var expect = require( "chai" ).expect;
describe( "Foo module", function(){
  it( "should bypass the export of bar", function(){
      var foo = require( "./foo" );
      expect( foo ).to.have.property( "bar" );
      expect( foo.bar ).to.eql( "bar" );
  });
});