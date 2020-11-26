/**
 * @param {number[]} nums
 * @return {number}
 */

export default (nums) => {
  if (nums.length === 1) return nums[0];
  let count = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count < 0) {
      count = 0;
    }
    count += nums[i];
    if (count > result) {
      result = count;
    }
  }
  return result;
};
