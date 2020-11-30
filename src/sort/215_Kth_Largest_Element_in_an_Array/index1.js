/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export default (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
