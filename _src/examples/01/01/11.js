/**
 * Use of rest operator in destuction
 */
let [ bar, ...others ] = [ "bar", "foo", "baz", "qux" ];
console.log([ bar, others ]); // ["bar",["foo","baz","qux"]]
