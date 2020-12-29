/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Runtime: 112 ms, faster than 92.27% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 49.7 MB, less than 54.84% of JavaScript online submissions for Product of Array Except Self.
export default (nums) => {
  const len = nums.length;
  const res = [];
  res[0] = 1;
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
