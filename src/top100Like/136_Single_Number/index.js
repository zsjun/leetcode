/**
 * @param {number[]} nums
 * @return {number}
 */
//  Runtime: 76 ms, faster than 97.24% of JavaScript online submissions for Single Number.
//  Memory Usage: 41.4 MB, less than 66.11% of JavaScript online submissions for Single Number.
export default (nums) => {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};
