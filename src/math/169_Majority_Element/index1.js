/**
 * @param {number[]} nums
 * @return {number}
 */
// Runtime: 92 ms, faster than 31.11% of JavaScript online submissions for Majority Element.
// Memory Usage: 43.1 MB, less than 7.90% of JavaScript online submissions for Majority Element.
export default (nums) => {
  if (nums.length === 1) return nums[0];
  nums.sort((a, b) => a - b);
  const max = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    const tempMax = i + max;
    if (nums[tempMax] === nums[i]) {
      return nums[i];
    }
    if (tempMax > nums.length) {
      break;
    }
  }
};
