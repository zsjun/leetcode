/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, val);
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    this.map.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
//  Runtime: 228 ms, faster than 24.73% of JavaScript online submissions for Insert Delete GetRandom O(1).
//  Memory Usage: 49.3 MB, less than 15.96% of JavaScript online submissions for Insert Delete GetRandom O(1).
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(this.map.size * Math.random());
  let count = 0;
  for (let [key, val] of this.map) {
    if (count === random) {
      return val;
    } else {
      ++count;
    }
  }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
