 /**
   * Block comment entity
   * @class
   * @param {String} code
   */
var BlockComment = function( code ){
  return {
    /**
     * Check a block comment
     * @returns {Boolean}
     */
    isValid: function(){
      var lines = code.split( "\n" );
      return lines.some(function( line ){
          var date = new Date();
          return line.indexOf( "@copyright " + date.getFullYear() ) !== -1;
        });
    }
  };
};

module.exports = BlockComment;
