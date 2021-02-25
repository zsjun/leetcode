/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Runtime: 92 ms, faster than 49.80% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 39.3 MB, less than 70.60% of JavaScript online submissions for Kth Largest Element in an Array.
export default (nums, k) => {
  nums = nums.sort((a, b) => b - a);
  return nums[k - 1];
};
