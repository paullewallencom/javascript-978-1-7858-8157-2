module.exports = function( grunt ) {
  var pkg = grunt.file.readJSON( "package.json" ),
      cfg = {
        pkg: pkg
      };

  /**
   * SASS
   * @link https://github.com/sindresorhus/grunt-sass
   */
  grunt.loadNpmTasks( "grunt-contrib-sass" );
  cfg.sass = {
  };
  cfg.sass.app = {
      options: {
        style: "compressed",
        unixNewlines: true
      },
      files: [{
        expand: true,
        cwd: "./src/sass",
        src: ["*.scss"],
        dest: "./assets/css/",
        ext: ".css"
      }]
  };
  cfg.sass.debug = {
    options: {
      style: "expanded",
      unixNewlines: true,
      trace: true,
      sourcemap: "inline"
    },
    files: cfg.sass.app.files
  };

  /**
  * JS CODESNIFFER
  * @link https://github.com/dsheiko/jscodesniffer
  */
  grunt.loadNpmTasks( "grunt-jscodesniffer" );
  cfg.jscs = {
    app: {
      options: {
        standard: "Jquery"
      },
      files: {
        src: [ "src/js" ]
      }
    },
    test: {
      options: {
        standard: "Jquery",
        reportFull: true
      },
      files: {
        src: [ "src/js" ]
      }
    }
  };

  /**
  *  COMMONJS COMPILER
  *  @link https://github.com/dsheiko/cjsc
  */
  grunt.loadNpmTasks( "grunt-cjsc" );
  cfg.cjsc = {};
  cfg.cjsc.debug = {
   options: {
     sourceMap: "./assets/js/*.map",
     minify: false
    },
    files: {
       "./assets/js/main.js": "./src/js/main.js"
    }
  };
  cfg.cjsc.app = {
    options: {
      debug: false,
      minify: true
     },
   files: cfg.cjsc.debug.files
  };


  grunt.initConfig( cfg );


  grunt.registerTask( "debug", [
    "sass:debug",
    "cjsc:debug"
  ]);
  grunt.registerTask( "build", [
    "sass:app",
    "jscs:app",
    "cjsc:app"
  ]);
  grunt.registerTask( "test", [
    "jscs:test"
  ]);
  grunt.registerTask( "default", [ "build" ]);

};
