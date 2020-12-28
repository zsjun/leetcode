/**
 * @param {number[]} nums
 */

//  Runtime: 236 ms, faster than 67.68% of JavaScript online submissions for Shuffle an Array.
//  Memory Usage: 52.4 MB, less than 55.56% of JavaScript online submissions for Shuffle an Array.
var Solution = function (nums) {
  this.nums = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const tempNums = [...this.nums];
  const len = tempNums.length;
  for (let i = 0; i < tempNums.length; i++) {
    const index = Math.floor(Math.random() * (len - i) + i);
    // console.log(index)
    const temp = tempNums[index];
    tempNums[index] = tempNums[i];
    tempNums[i] = temp;
  }
  return tempNums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
