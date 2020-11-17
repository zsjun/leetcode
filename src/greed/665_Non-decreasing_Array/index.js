/**
 * @param {number[]} nums
 * @return {boolean}
 */

// [-1,4,2,3]
// [5,4,1,8]
// [3,4,2,3]
// 423
export default (nums) => {
  let hasChangedNum = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1] && !hasChangedNum) {
      hasChangedNum = true;
      if (nums[i - 2] <= nums[i] || i < 2) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    } else if (nums[i] < nums[i - 1] && hasChangedNum) {
      return false;
    }
  }
  return true;
};
