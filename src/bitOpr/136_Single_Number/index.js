/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 84 ms, faster than 84.68% of JavaScript online submissions for Single Number.
// Memory Usage: 40.3 MB, less than 87.12% of JavaScript online submissions for Single Number.
export default (nums) => {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
