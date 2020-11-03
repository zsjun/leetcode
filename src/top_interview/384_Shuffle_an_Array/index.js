/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.initNums = [...nums];
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.initNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let res = [];
  while (this.nums.length > 0) {
    let i = Math.floor(Math.random() * this.nums.length);
    res.push(this.nums[i]);
    this.nums.splice(i, 1);
  }
  this.nums = res;
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
export default Solution;
