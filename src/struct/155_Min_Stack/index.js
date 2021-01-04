/**
 * initialize your data structure here.
 */
// Runtime: 120 ms, faster than 77.56% of JavaScript online submissions for Min Stack.
// Memory Usage: 45.8 MB, less than 48.96% of JavaScript online submissions for Min Stack.
var MinStack = function () {
  this.arr = [];
  this.min = Number.MAX_VALUE;
  this.minArr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr.push(x);
  if (this.min >= x || this.minArr.length === 0) {
    this.minArr.push(x);
    this.min = x;
  }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const res = this.arr.pop();
  if (res === this.minArr[this.minArr.length - 1]) {
    this.minArr.pop();
    this.min = this.minArr[this.minArr.length - 1];
  }
  return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
