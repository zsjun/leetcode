/**
 * initialize your data structure here.
 */
//  Runtime: 612 ms, faster than 6.06% of JavaScript online submissions for Min Stack.
//  Memory Usage: 48.6 MB, less than 5.33% of JavaScript online submissions for Min Stack.
var MinStack = function () {
  this.arr = [];
  this.minArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
  this.minArr.push(val);
  this.minArr.sort((a, b) => a - b);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const res = this.arr.pop();
  // console.log(11,this.minArr,res)
  for (let i = 0; i < this.minArr.length; i++) {
    if (res === this.minArr[i]) {
      this.minArr.splice(i, 1);
    }
  }
  // console.log(this.minArr)
  this.minArr.sort((a, b) => a - b);
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
  return this.minArr[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
