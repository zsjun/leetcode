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
  if (!this.map.has(val)) {
    return false;
  } else {
    this.map.delete(val);
    return true;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let keys = [...this.map.keys()];
  const index = Math.floor(Math.random(1) * keys.length);

  return this.map.get(keys[index]);
};

export default RandomizedSet;
