"use strict";
var fs = require( "fs" ),
    Example = require( "./lib/builder/Example" ),
    nav = require( "./lib/builder/Nav" ),
    rawDataHtml = "",

    buildMultiSrc = function( el ) {
      var example = new Example( this.parent, el );
      rawDataHtml += example.render();
      return example;
    },

    build = function( cfg, parent ){
      var html = "";
      cfg.forEach(function ( el ) {
        var example;
        if ( el.title ) {
          html += nav.renderSection( parent, el, build );
          return;
        }
        if ( el.children ) {
          html += nav.renderCompositeItem( el.file, el.children.map( buildMultiSrc, { parent: parent } ) );
          return;
        }
        example = new Example( parent, el );
        rawDataHtml += example.render();
        example.saveDemo();
        html += nav.renderItem( example );
      });
      return html;
    };


fs.readFile( "examples/config.json", "utf-8", function( err, data ){
  var contentsHtml;
  if ( err ) {
    throw new Error( err );
  }
  contentsHtml = build( JSON.parse( data ) );
  fs.readFile( "examples/main.tpl", "utf-8", function( err, tpl ){
    if ( err ) {
      throw new Error( err );
    }
    fs.writeFile( "index.html",
      tpl
        .replace( "{{contents}}", contentsHtml )
        .replace( "{{templates}}", rawDataHtml ),
        "utf-8", function( err ){
      if ( err ) {
        throw new Error( err );
      }
    });
  });
});
