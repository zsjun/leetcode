/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let max = Math.max(nums[0], nums[1]);
  nums[1] = max;
  let preMax = nums[0];
  for (let i = 2; i < nums.length; i++) {
    nums[i] += nums[i - 2];
    nums[i] = Math.max(nums[i], nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;
};
