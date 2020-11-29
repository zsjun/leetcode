/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
export default (nums, target) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  if (nums.length === 1) return nums[0] === target;

  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < nums[high]) {
      // 判断target是否在这个范围内
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else if (nums[mid] > nums[low]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[low] === nums[mid]) {
      low++;
    } else {
      high--;
    }
  }
  return false;
};
