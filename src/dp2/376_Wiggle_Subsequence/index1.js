// Runtime: 76 ms, faster than 72.34% of JavaScript online submissions for Wiggle Subsequence.
// Memory Usage: 38.5 MB, less than 36.17% of JavaScript online submissions for Wiggle Subsequence.
export default (nums) => => {
  if (nums.length < 2) return nums.length;
  let down = 1;
  let up = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) up = down + 1;
    else if (nums[i] < nums[i - 1]) down = up + 1;
  }
  return Math.max(down, up);
};