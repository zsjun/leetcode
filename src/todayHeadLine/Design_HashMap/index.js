/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.arr = [];
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i].key === key) {
      this.arr[i].value = value;
      return;
    }
  }
  this.arr.push({
    key,
    value,
  });
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i].key === key) {
      return this.arr[i].value;
    }
  }
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  for (let i = 0; i < this.arr.length; i++) {
    if (this.arr[i].key === key) {
      this.arr.splice(i, 1);
      return;
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
