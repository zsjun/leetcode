/**
 * @param {number} capacity
 */
// LRU算法最近时间使用过的，不按照使用次数，也就是按照是否使用了，如果使用排在前面，没有使用排在后边，get算一次，put也算一次
var LRUCache = function (capacity) {
  this.map = new Map();
  this.size = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.size) {
    this.map.delete(this.map.keys().next().value);
  }
  console.log(this.map);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
