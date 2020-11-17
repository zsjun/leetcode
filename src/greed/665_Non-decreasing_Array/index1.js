/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  let hasChangedNum = 0;
  for (let i = 1; i < nums.length && hasChangedNum <= 1; i++) {
    if (nums[i] < nums[i - 1]) {
      hasChangedNum++;
      if (nums[i - 2] <= nums[i] || i < 2) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return hasChangedNum <= 1;
};
