/**
 * Initialize your data structure here.
 */
// Runtime: 76 ms, faster than 67.91% of JavaScript online submissions for Implement Stack using Queues.
// Memory Usage: 38.5 MB, less than 39.93% of JavaScript online submissions for Implement Stack using Queues.
var MyStack = function () {
  this.queue2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue2.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  const len = this.queue2.length;
  for (let i = 1; i < len; i++) {
    let n = this.queue2.shift();
    this.queue2.push(n);
  }
  return this.queue2.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue2[this.queue2.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue2.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
