/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Runtime: 80 ms, faster than 92.98% of JavaScript online submissions for Single Number III.
// Memory Usage: 39.4 MB, less than 87.72% of JavaScript online submissions for Single Number III.
export default (nums) => {
  let res = [0, 0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum ^= nums[i];
  }

  sum = sum & ~(sum - 1);

  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & sum) === 0) {
      res[0] ^= nums[i];
    } else {
      res[1] ^= nums[i];
    }
  }

  return res;
};
