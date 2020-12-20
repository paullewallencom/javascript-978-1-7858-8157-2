/**
 * ES6 class with static methods
 */

class Bar {
  static foo() {
    return "static method";
  }
  baz() {
    return "prototype method";
  }
}
let instance = new Bar();
console.log( instance.baz() ); // prototype method
console.log( Bar.foo()) ); // static method
