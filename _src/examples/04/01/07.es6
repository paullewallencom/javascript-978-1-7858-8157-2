/**
 * FileSystem API usage example
 */
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
    /**
     * Read file from a given FileSystem
     * @param {DOMFileSystem} fs
     * @param {String} file
     */
var readFile = function( fs, file ) {
      console.log( "Reading file " + file );
      // Obtain FileEntry object
      fs.root.getFile( file, {}, function( fileEntry ) {
        fileEntry.file(function( file ){
           // Create FileReader
           var reader = new FileReader();
           reader.onloadend = function() {
             console.log( "Fetched content: ", this.result );
           };
           // Read file
           reader.readAsText( file );
        }, console.error );
      }, console.error );
    },
    /**
     * Save file into a given FileSystem and run onDone when ready
     * @param {DOMFileSystem} fs
     * @param {String} file
     * @param {Function} onDone
     */
    saveFile = function( fs, file, onDone ) {
      console.log( "Writing file " + file );
      // Obtain FileEntry object
      fs.root.getFile( file, { create: true }, function( fileEntry ) {
        // Create a FileWriter object for the FileEntry
        fileEntry.createWriter(function( fileWriter ) {
          var blob;
          fileWriter.onwriteend = onDone;
          fileWriter.onerror = function(e) {
            console.error( "Writing error: " + e.toString() );
          };
          // Create a new Blob out of the text we want into the file.
          blob = new Blob([ "Lorem Ipsum" ], { type: "text/plain" });
          // Write into the file
          fileWriter.write( blob );
        }, console.error );
      }, console.error );
    },
    /**
     * Run when FileSystem initialized
     * @param {DOMFileSystem} fs
     */
    onInitFs = function ( fs ) {
      const FILENAME = "log.txt";
      console.log( "Opening file system: " + fs.name );
      saveFile( fs, FILENAME, function(){
        readFile( fs, FILENAME );
      });
    };

window.requestFileSystem( window.TEMPORARY, 5*1024*1024 /*5MB*/, onInitFs, console.error );