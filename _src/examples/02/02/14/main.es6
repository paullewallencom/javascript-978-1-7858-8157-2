import { bar, setBar } from "./foo";
console.log( bar ); // bar
setBar( "baz" );
console.log( bar ); // baz
// bar = "qux"; // TypeError