var counter = 0;
define(function() {
    console.log( "Calling module body attempt: ", ++counter );
    return {
      foo: "foo"
    };
  }
);