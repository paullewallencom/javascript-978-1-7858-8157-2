/**
 * This test is based on Mocha framework https://mochajs.org/ and can be ran like:
 * mocha tests/sourceFile.js
 *
 * The test is designed in BDD manner, uses Chai assertion library (http://chaijs.com/)
 * and Sinon stubs (http://sinonjs.org/)
 */
/** @type {module:sinon} */
var sinon = require( "sinon" ),
    /** @type {module:chai} */
    expect = require( "chai" ).expect,
    /** @type {module:sinon} */
    sinon = require( "sinon" ),
    /** @type {String} comment */
    fixture = "/**\n* @copyright 2015 \n*/\nvar foo = true;",

    /** @type {String} comment */
    BlockComment = sinon.stub(),

    /** @type {module:Lib/SourceFile} test target */
    SourceFile = require( "../Lib/SourceFile" ),

    srcFile = new SourceFile( fixture, BlockComment );

BlockComment.prototype.isValid = sinon.stub().returns( true );

describe( "SourceFile", function(){
  it( "tests if source file is valid", function(){
    expect( srcFile.isValid() ).to.be.ok;
  });
});