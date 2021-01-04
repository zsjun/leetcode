/**
 * Initialize your data structure here.
 */
// Runtime: 76 ms, faster than 71.35% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 38.8 MB, less than 10.22% of JavaScript online submissions for Implement Queue using Stacks.
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack1.length === 0) {
    return false;
  }
  while (this.stack1.length > 0) {
    const temp = this.stack1[this.stack1.length - 1];
    this.stack2.push(temp);
    this.stack1.pop();
  }
  const res = this.stack2[this.stack2.length - 1];
  this.stack2.pop();
  while (this.stack2.length > 0) {
    const temp = this.stack2[this.stack2.length - 1];
    this.stack1.push(temp);
    this.stack2.pop();
  }
  return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack1.length === 0) {
    return false;
  }
  while (this.stack1.length > 0) {
    const temp = this.stack1[this.stack1.length - 1];
    this.stack2.push(temp);
    this.stack1.pop();
  }
  const res = this.stack2[this.stack2.length - 1];
  while (this.stack2.length > 0) {
    const temp = this.stack2[this.stack2.length - 1];
    this.stack1.push(temp);
    this.stack2.pop();
  }
  return res;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
