/**
 * @param {number[]} nums
 * @return {number}
 */

export default (nums) => {
  if (nums.length === 1) return nums[0];
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    console.log(low, high, mid);
    if (
      (mid + 1 < nums.length && nums[mid] !== nums[mid + 1] && mid >= 1 && nums[mid] !== nums[mid - 1]) ||
      (mid === nums.length - 1 && nums[mid] !== nums[mid - 1]) ||
      (mid === 0 && nums[mid] !== nums[mid + 1])
    ) {
      return nums[mid];
    }
    if (mid % 2 !== 0) {
      if (mid >= 1 && nums[mid - 1] === nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (mid >= 1 && nums[mid] === nums[mid - 1]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return nums[low];
};
