/**
 * @param {number[]} nums
 */

// Runtime: 116 ms, faster than 87.76% of JavaScript online submissions for Range Sum Query - Immutable.
// Memory Usage: 45.8 MB, less than 33.85% of JavaScript online submissions for Range Sum Query - Immutable.
var NumArray = function (nums) {
  this.nums = nums;
  this.copyNums = [0];
  for (let i = 0; i < nums.length; i++) {
    this.copyNums[i + 1] = this.copyNums[i] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.copyNums[j + 1] - this.copyNums[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
