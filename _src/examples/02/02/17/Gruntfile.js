module.exports = function( grunt ) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    cjsc: {
      // A target to generate uncompressed code with sources maps
      debug: {
        options: {
          sourceMap: "js/*.map",
          sourceMapRoot: "src/",
          minify: false
        },
        files: { "js/bundle.js": "js/src/main.js" }
      },
      // A target to build project for production
      build: {
        options: {
          minify: true,
          banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
          "<%= grunt.template.today(\"yyyy-mm-dd\") %> */"
        },
        files: { "js/bundle.js": "js/src/main.js" }
      }
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks( "grunt-cjsc" );

  // Make it default task
  grunt.registerTask( "default", [ "cjsc:build" ] );

};