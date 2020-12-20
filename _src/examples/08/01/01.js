/**
 * console.log with specifiers
 */
var node = document.body;
console.log( "Element %s has %d child nodes; JavaScript object %O, DOM element %o",
  node.tagName,
  node.childNodes.length,
  node,
  node );