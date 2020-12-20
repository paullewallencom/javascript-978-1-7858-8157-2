module.exports = function( grunt ) {
  grunt.initConfig({
    cjsc: {
      build: {
        options: {
          minify: true,
          config: require( "fs" ).readFileSync( "./cjsc-conig.json" )
        }
      },
        files: { "js/bundle.js": "js/src/main.js" }
      }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks( "grunt-cjsc" );

  // Make it default task
  grunt.registerTask( "default", [ "cjsc:build" ] );

};