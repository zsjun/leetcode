/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 63.62% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.8 MB, less than 56.21% of JavaScript online submissions for Two Sum.
export default (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
