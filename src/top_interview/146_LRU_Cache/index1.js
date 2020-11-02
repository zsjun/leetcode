/**
 * @param {number} capacity
 */
// LRU算法最近时间使用过的，不按照使用次数，也就是按照是否使用了，如果使用排在前面，没有使用排在后边，get算一次，put也算一次
var LRUCache = function (capacity) {
  this.map = new Map();
  this.size = capacity;
  this.sortKeys = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    for (let i = 0; i < this.sortKeys.length; i++) {
      if (this.sortKeys[i] === key) {
        this.sortKeys.splice(i, 1);
        break;
      }
    }
    this.sortKeys.push(key);
    return this.map.get(key);
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
  if (this.map.size >= this.size && !this.map.has(key)) {
    const key1 = this.sortKeys[0];
    this.map.delete(key1);
    this.sortKeys.shift();
  }
  if (this.map.has(key)) {
    this.map.delete(key);
    for (let i = 0; i < this.sortKeys.length; i++) {
      if (this.sortKeys[i] === key) {
        this.sortKeys.splice(i, 1);
        break;
      }
    }
  }
  this.map.set(key, value);
  this.sortKeys.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
