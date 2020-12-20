/**
 * Object.create example
 */
"use strict";
var proto = {
  bar: "bar",
  foo: "foo"
},
instance = Object.create( proto );
proto.bar = "qux",
instance.foo = "baz";
console.log( instance ); // { foo="baz",  bar="qux"}
console.log( proto ); // { bar="qux",  foo="foo"}