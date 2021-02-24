/**
 * @param {number} capacity
 */
//  ["LRUCache","get","put","get","put","put","get","get"]
//  [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
// [null,-1,null,-1,null,null,2,-1]
// [null,-1,null,-1,null,null,2,6]

// {
//   1:2,
//   2:6,

// }

// Runtime: 180 ms, faster than 96.83% of JavaScript online submissions for LRU Cache.
// Memory Usage: 50.6 MB, less than 96.18% of JavaScript online submissions for LRU Cache.
var LRUCache = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
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
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
    this.map.set(key, value);
  } else {
    if (this.map.size >= this.max) {
      const key1 = this.map[Symbol.iterator]().next().value;
      this.map.delete(key1[0]);
    }
    this.map.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
