/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const help = (nums, low, high, target) => {
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    }
    if (nums[mid] > target) {
      high = mid - 1;
    }
  }
  return false;
};
export default (nums, target) => {
  if (nums.length === 0 || !nums) {
    return false;
  }
  if (nums.length === 1) return nums[0] === target;

  let beigin = 0;
  let high = nums.length - 1;
  let mid = 0;
  for (let i = 0; i <= high; i++) {
    if (nums[i + 1] < nums[i]) {
      mid = i + 1;
      break;
    }
  }
  return help(nums, 0, mid, target) || help(nums, mid, high, target);
};
