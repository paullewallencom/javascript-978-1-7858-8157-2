    /** @type {module:esprima} */
var esprima = require( "esprima" ),

/**
 * Source file entity
 * @class
 * @param {String} fileSrc
 * @param {module:Lib/BlockComment} BlockComment - dependency injection
 */
SourceFile = function( fileSrc, BlockComment ){
  return {
    /**
     * Test if source file has valid copyright
     */
    isValid: function() {
      var blockComments = this.parse( fileSrc );
      return Boolean( blockComments.filter(function( comment ){
        return comment.isValid();
      }).length );
    },
    /**
     * Extract all the block comments as array of BlockComment instances
     * @param {String} src
     * @returns {Array} - collection of BlockComment
     */
    parse: function( src ){
      return esprima.parse( src, {
        comment: true
      }).comments.filter(function( item ){
        return item.type === "Block";
      }).map(function( item ){
        return new BlockComment( item.value );
      });
    }

  };
};

module.exports = SourceFile;