/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.size = capacity;
  this.arr = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
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
  if (this.map.size === this.size) {
    console.log(this.arr);
    const key1 = this.arr[this.arr.length - 1];
    this.arr.pop();
    console.log(this.arr);
    console.log(222, key);
    this.map.delete(key1);
    this.arr.push(key);
    this.map.set(key, value);
  } else {
    this.arr.push(key);
    this.map.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export default LRUCache;
