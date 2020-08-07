/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default (nums, target) => {
  if (!nums || nums.length === 0) return -1;
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] > nums[high]) low = mid + 1;
    else high = mid;
  }
  let targetIndex = low >= 1 ? low - 1 : 0;
  low = 0;
  high = targetIndex;
  if (nums[targetIndex] === target) return targetIndex;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  low = targetIndex + 1;
  high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
