/**
 * Web Storage API (traversal)
 */
var storage = isPersistent ? localStorage : sessionStorage;
var i = 0, len = storage.length, key;
for( ; i < len; i++ ) {
  key = storage.key( i );
  storage.getItem( key );
}