/**
 * Inheritance in ES6 classes
 */
"use strict";
class AbstractClass {
  constructor() {
    this.foo = "foo";
  }
}
class ConcreteClass extends AbstractClass {
  constructor() {
    super();
    this.bar = "bar";
  }
  baz() {
    return "baz";
  }
}

let instance = new ConcreteClass();
console.log( instance.bar ); // bar
console.log( instance.foo ); // foo
console.log( instance.baz() ); // baz
console.log( instance instanceof ConcreteClass ); // true
console.log( instance instanceof AbstractClass ); // true

