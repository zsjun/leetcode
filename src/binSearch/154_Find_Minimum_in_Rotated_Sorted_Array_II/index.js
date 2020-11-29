/**
 * @param {number[]} nums
 * @return {number}
 */
// 2, 2, 2, 0, 1;
export default (nums) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  if (nums.length === 1) return nums[0];
  let low = 0;
  let high = nums.length - 1;
  let min = Number.MAX_VALUE;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] < nums[high]) {
      high = mid - 1;
      min = Math.min(nums[mid], min);
    } else if (nums[mid] > nums[low]) {
      min = Math.min(nums[low], min);
      low = mid + 1;
    } else if (nums[low] === nums[mid]) {
      min = Math.min(nums[low], min);
      low++;
    } else {
      min = Math.min(nums[high], min);
      high--;
    }
  }
  return min;
};
