/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 88 ms, faster than 64.15% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 39.9 MB, less than 96.67% of JavaScript online submissions for Longest Consecutive Sequence.
export default (nums) => {
  if (!nums || nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let res = 1;
  for (let i = 1; i < nums.length; ) {
    // let j = i;
    let count = 1;
    while (i < nums.length) {
      if (nums[i] === nums[i - 1] + 1) {
        ++i;
        ++count;
      } else if (nums[i] === nums[i - 1]) {
        ++i;
      } else {
        ++i;
        break;
      }
    }
    res = Math.max(res, count);
  }
  return res;
};
