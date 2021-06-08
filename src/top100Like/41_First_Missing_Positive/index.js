/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 176 ms, faster than 7.61% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 86.1 MB, less than 5.13% of JavaScript online submissions for First Missing Positive.
export default (nums) => {
  nums.sort((a, b) => a - b);
  nums = nums.filter((num) => num > 0);
  let res = 1;
  nums = Array.from(new Set(nums));

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === res) {
      ++res;
    } else {
      return res;
    }
  }
  return res;
};
