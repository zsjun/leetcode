/**
 * @param {number} capacity
 */
//  Runtime: 184 ms, faster than 89.92% of JavaScript online submissions for LRU Cache.
//  Memory Usage: 50.7 MB, less than 92.90% of JavaScript online submissions for LRU Cache.
var LRUCache = function (capacity) {
  this.size = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const tempVal = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, tempVal);
    return tempVal;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
//
LRUCache.prototype.put = function (key, value) {
  // 这里代码的错误是没有考虑当this.map.size 大于等于this.size的时候，也需要考虑删除掉同样的key
  // if (this.map.size < this.size) {
  //   if (this.map.has(key)) {
  //     this.map.delete(key);
  //   }
  // } else {
  //   for (let key1 of this.map.keys()) {
  //     this.map.delete(key1);
  //     break;
  //   }
  // }
  // this.map.set(key,value)
  if (this.map.has(key)) {
    this.map.delete(key);
  } else if (this.map.size >= this.size) {
    const oldestKey = this.map.keys().next().value;
    this.map.delete(oldestKey);
  }

  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
