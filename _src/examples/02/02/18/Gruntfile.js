module.exports = function( grunt ) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    // CommonJS Compiler config
    cjsc: {
      debug: {
        options: {
          sourceMap: "js/*.map",
          sourceMapRoot: "src/",
          minify: false
        },
        files: { "js/bundle.js": "js/src/main.js" }
      },
      build: {
        options: {
          minify: true,
          banner: "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
          "<%= grunt.template.today(\"yyyy-mm-dd\") %> */"
        },
        files: { "js/bundle.js": "js/src/main.js" }
      }
    },
    // Watch config
    watch: {
      options: {
        livereload: false
      },
      js: {
        files: [ "js/src/**/**/**/*.js" ],
        tasks: [ "cjsc:debug" ]
      }
    }
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks( "grunt-cjsc" );
  grunt.loadNpmTasks( "grunt-contrib-watch" );

  // Make cjsc default task
  grunt.registerTask( "default", [ "cjsc:build" ] );

};