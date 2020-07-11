export default (nums) => {
  if (nums.length < 2) return 0;

  // 二分查找
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    let mid1 = mid + 1;
    if (nums[mid] < nums[mid1]) {
      low = mid1;
    } else if (nums[mid] > nums[mid1]) {
      high = mid;
    }
  }
  return low;
};
