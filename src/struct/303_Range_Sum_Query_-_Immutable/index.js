/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (this.map.has(`${i}${j - 1}`)) {
        const count = this.map.get(`${i}${j - 1}`) + nums[j];
        this.map.set(`${i}${j}`, count);
      } else {
        this.map.set(`${i}${j}`, nums[j]);
      }
    }
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.map.get(`${i}${j}`);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
