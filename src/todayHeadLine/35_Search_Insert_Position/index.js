/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Runtime: 84 ms, faster than 30.00% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 38.6 MB, less than 69.38% of JavaScript online submissions for Search Insert Position.
export default (nums, target) => {
  if (!nums || nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      if (i === 0) {
        return 0;
      } else {
        return i;
      }
    }
  }
  return nums.length;
};
