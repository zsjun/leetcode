/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.max = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  console.log(this.map, this.keyMap);
  if (this.map.has(key)) {
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
// Runtime: 196 ms, faster than 64.75% of JavaScript online submissions for LRU Cache.
// Memory Usage: 51.3 MB, less than 59.00% of JavaScript online submissions for LRU Cache.
LRUCache.prototype.put = function (key, value) {
  console.log(this.map.size, this.max);
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.max) {
    const firstKey = this.map.keys().next().value;
    this.cache.delete(firstKey);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
