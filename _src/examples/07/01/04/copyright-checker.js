    /** @type {module:cli-color} */
var clc = require( "cli-color" ),
    /** @type {module:fs-walk} */
    walk = require( "fs-walk" ),
    /** @type {module:path} */
    path = require( "path" ),
    /** @type {module:fs} */
    fs = require( "fs" ),
    /**
     * Source file entity
     * @type {module:Lib/SourceFile}
     */
    SourceFile = require( "./Lib/SourceFile" ),
    /** @type {module:Lib/BlockComment} */
    BlockComment = require( "./Lib/BlockComment" ),
    /**
     * Command-line first argument (if none given, go with ".")
     * @type {String}
     */
    dir = process.argv[ 2 ] || ".";

console.log( "Checking in " + clc.yellow( dir ) );

// Traverse directory tree recursively beginning from 'dir'
walk.files( dir, function( basedir, filename ) {
      /** @type {Function} */
  var next = arguments[ 3 ],
      /** @type {String} */
      fpath = path.join( basedir, filename ),
      /** @type {String} */
      fileSrc = fs.readFileSync( fpath, "UTF-8" ),
      /**
       * Get entity associated with the file located in fpath
       * @type {SourceFile}
       */
      file = new SourceFile( fileSrc, BlockComment );
  // ignore non-js files
  if ( !filename.match( /\.js$/i ) ) {
    return next();
  }
  if ( file.isValid() ) {
    console.log( fpath + ": " + clc.green( "valid" ) );
  } else {
    console.log( fpath + ": " + clc.red( "invalid" ) );
  }
  next();
}, function( err ) {
  err && console.log( err );
});