export default (nums) => {
  let lastMax = nums[0];
  let max = nums[0];
  for (let j = 1; j < nums.length; j++) {
    nums[j] = Math.max(nums[j], nums[j - 1] + nums[j]);
    max = Math.max(max, nums[j]);
  }
  return max;
};
