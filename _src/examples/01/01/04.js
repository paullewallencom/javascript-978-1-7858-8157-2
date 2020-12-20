/**
 * Conditional invocation 3
 */
/**
 * @class AbstractFoo
 */
AbstractFoo = function(){
  // call this.init if the subclass has init method
  this.init && this.init();
};