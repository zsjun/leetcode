/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 88 ms, faster than 65.50% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.4 MB, less than 28.25% of JavaScript online submissions for Missing Number.

export default (nums) => {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res ^= i;
    res ^= nums[i];
  }
  return res;
};
