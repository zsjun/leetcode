/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [2, 0, 2, 1, 1, 0][(2, 0, 2, 1, 1, 0)];
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

export default (nums) => {
  let low = 0;
  while (nums[low] === 0) {
    low++;
  }
  let high = nums.length - 1;
  while (nums[high] === 2) {
    high--;
  }
  for (let i = low; i <= high; ) {
    if (low > high) {
      break;
    }
    if (nums[i] === 0 || nums[i] === 2) {
      if (nums[i] === 0) {
        if (low !== i) {
          swap(nums, low, i);
        }
        low++;
        i = low;
      } else if (nums[i] === 2) {
        if (i !== high) {
          swap(nums, i, high);
        }
        high--;
      }
      continue;
    } else {
      i++;
    }
  }
  return nums;
};
