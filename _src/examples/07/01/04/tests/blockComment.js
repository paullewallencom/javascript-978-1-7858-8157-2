/**
 * This test is based on Mocha framework https://mochajs.org/ and can be ran like:
 * mocha tests/blockComment.js
 *
 * The test is designed in BDD manner and uses Chai assertion library (http://chaijs.com/)
 */
/** @type {module:sinon} */
var sinon = require( "sinon" ),
    /** @type {module:chai} */
    expect = require( "chai" ).expect,
    /** @type {String} comment */
    fixture = "/**\n* @copyright 2015 \n*/",
    /** @type {module:Lib/BlockComment} test target */
    BlockComment = require( "../Lib/BlockComment" ),
    /** @type {BlockComment} test target instance */
    comment = new BlockComment( fixture );

describe( "BlockComment", function(){
  it( "tests if block comment is valid", function(){
    expect( comment.isValid() ).to.be.ok;
  });
});