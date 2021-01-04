/**
 * Initialize your data structure here.
 */
// Runtime: 72 ms, faster than 87.77% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 38.7 MB, less than 10.22% of JavaScript online submissions for Implement Queue using Stacks.
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
  this.front = "";
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.stack1.length === 0) {
    this.front = x;
  }
  this.stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // if (this.stack2.length === 0) {
  //   return false;
  // }
  if (this.stack2.length >= 1) {
    const res = this.stack2.pop();
    if (this.stack2.length > 0) {
      this.front = this.stack2.pop();
      this.stack2.push(this.front);
    }
    return res;
  }
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      const temp = this.stack1.pop();
      this.stack2.push(temp);
    }
  }

  const res = this.stack2.pop();
  if (this.stack2.length > 0) {
    this.front = this.stack2.pop();
    this.stack2.push(this.front);
  }

  return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
