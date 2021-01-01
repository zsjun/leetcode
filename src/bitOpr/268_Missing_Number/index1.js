/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 88 ms, faster than 65.50% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.2 MB, less than 47.38% of JavaScript online submissions for Missing Number.
export default (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (res === nums[i]) {
      res++;
    } else {
      if (res ^ (nums[i] != 0)) {
        return res;
      }
    }
  }
  return res;
};
