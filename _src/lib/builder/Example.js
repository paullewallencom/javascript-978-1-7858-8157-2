/**
 *
 * @module lib/builder/Example
 */
"use strict";
var Base = require( "class-extend" ),
    fs = require( "fs" ),
    demoTpl = fs.readFileSync( "./examples/demo.tpl", "utf-8" );

module.exports = Base.extend({
  // Id to match boundings (template)
  id: "",
  // Example file name
  file: "",
  // Example content
  code: "",
  // Runable representation (separate HTML file out of example that can be executed for demo)
  demo: "",
  /**
   * @constructs
   * @param {Object} parent
   * @param {Object} el
   */
  constructor: function( parent, el ){
    var dir = parent.dir,
        file = el.file;
    this.el = el;
    this.file = "examples/" + dir + "/" + file;
    this.id = "tpl" + dir.replace( "\/", "_") + "_" + file;
    this.demo = "build/" + this.file.replace( /\//gm, "-" ) + ".html";
    this.code = fs.readFileSync( this.file, "utf-8" );
  },
  /**
  *
  * @param {String} str
  * @returns {String}
  */
  htmlEntities: function( str ) {
      return String( str )
        .replace( /&/g, "&amp;" )
        .replace( /</g, "&lt;" )
        .replace( />/g, "&gt;" )
        .replace( /"/g, "&quot;" );
  },
  /**
   * Render container of the example code withing index.html
   * @returns {String}
   */
  render: function(){
    return [
      "<script id=\"", this.id, "\" type=\"text/template\">",
      this.htmlEntities( this.code ),
      "<\/script>" ].join( "" ) + "\n";
  },
  /**
   * Create HTML demo out of example
   */
  saveDemo: function() {
    var code = this.code;
    if ( this.el.requires ) {
      code = fs.readFileSync( this.el.requires, "utf-8" ) + code;
    }
    fs.writeFileSync( this.demo, demoTpl.replace( "{{code}}", code ), "utf-8" );
  }

});



