"use strict";
var counter = 1;
/**
 * @namespace
 */
module.exports = {
  /**
  * @param {Object} parent
  * @param {Object} el
  * @param {Function} cb
  * @returns {String}
  */
  renderSection: function( parent, el, cb ){
    var html = parent ? "<ul>\n" : "";
    if ( parent ) {
      html += "<li class=\"item\"><input type=\"checkbox\" id=\"id" + counter
        + "\"/><label for=\"id" + counter + "\">" + el.title + "</label>\n";
      counter++;
    } else {
      html += "<li>" + el.title + "\n";
    }
    if ( el.children && el.children.length ) {
      html += cb( el.children, el );
    }
    html += "</li>\n";
    html += parent ? "</ul>\n" : "";
    return html;
  },
  /**
    * @param {module:lib/builder/Example} example
    * @returns {String}
    */
   renderItem: function( example ){
     var html = "<ul>\n",
          name = example.el.file.replace( /\.(js|html|es6)$/, "" ),
     esExtra = example.el.es ? [ "data-es=\"", example.el.es, "\"" ].join( "" ) : "";
     esExtra += example.el.hasOwnProperty( "run" ) ? "data-run=\"false\"" : "";
     html += [ "<li><a href=\"#\" data-name=\"",
       example.el.file, "\" ", esExtra, " data-id=\"",
       example.id, "\" ", esExtra, " data-demo=\"", example.demo,
       "\">Example ", name, "</a></li>\n" ].join( "" );
     html += "</ul>\n";
     return html;
   },

   renderCompositeItem: function( name, examples ){
     var html = "<ul>\n",
         arr = examples.map(function( ex ){
           return ex.id + "|" + ex.el.file;
         });
     html += [ "<li><a href=\"#\" data-name=\"",
       name, "\" data-composite=\"",
       arr.join( ";" ), "\">Example ", name, "</a></li>\n" ].join( "" );
     html += "</ul>\n";
     return html;
   }
};


