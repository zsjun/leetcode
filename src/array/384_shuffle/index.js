/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.init = [...nums];
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.init;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const getRandomInt = (min, max) => {
    return parseInt(min + Math.random() * (max - min));
  };
  const len = this.nums.length;
  // 顺序获取两张牌，然后交换
  for (let i = 0; i < len; i++) {
    const left = getRandomInt(i, len);
    const tmp = this.nums[left];
    this.nums[left] = this.nums[i];
    this.nums[i] = tmp;
  }
  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
export default Solution;
