/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Runtime: 84 ms, faster than 71.10% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 39.1 MB, less than 87.66% of JavaScript online submissions for Kth Largest Element in an Array.
export default (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
