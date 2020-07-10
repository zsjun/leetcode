/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  // 存储data到index的对象
  this.data2Index = new Map();
  // 存储index到data的Map
  this.index2Data = new Map();
  // 最后的值
  this.index = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.data2Index.has(val)) return false;
  this.data2Index.set(val, this.index);
  this.index2Data.set(this.index, val);
  this.index++;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.data2Index.has(val)) return false;
  const index = this.data2Index.get(val);
  this.index--;
  const lastValue = this.index2Data.get(this.index);
  if (lastValue) {
    this.index2Data.set(index, lastValue);
    this.data2Index.set(lastValue, index);
  }

  this.index2Data.delete(this.index);
  this.data2Index.delete(val);

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random(1) * this.index2Data.size);

  return this.index2Data.get(index);
};

export default RandomizedSet;
