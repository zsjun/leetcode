/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 76 ms, faster than 72.34% of JavaScript online submissions for Wiggle Subsequence.
// Memory Usage: 38.5 MB, less than 44.68% of JavaScript online submissions for Wiggle Subsequence.
export default (nums) => {
  if (nums.length === 0 || !nums) return 0;
  if (nums.length <= 1) return 1;
  if (nums.length === 2) {
    return nums[0] !== nums[1] ? 2 : 1;
  }
  const len = nums.length;
  const up = new Array(len).fill(0);
  const down = new Array(len).fill(0);

  up[0] = 1;
  down[0] = 1;

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1;
      down[i] = down[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1;
      up[i] = up[i - 1];
    } else {
      down[i] = down[i - 1];
      up[i] = up[i - 1];
    }
  }

  return Math.max(down[nums.length - 1], up[nums.length - 1]);
};
