/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 58.57% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.6 MB, less than 90.55% of JavaScript online submissions for Two Sum.
export default (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
