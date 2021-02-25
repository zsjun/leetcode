/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// Runtime: 92 ms, faster than 49.80% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 39.3 MB, less than 70.60% of JavaScript online submissions for Kth Largest Element in an Array.
function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
function partition(nums, low, high) {
  let pivot = nums[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (nums[j] <= pivot) {
      swap(nums, i, j);
      i++;
    }
  }
  swap(nums, i, high);
  return i;
}
// Runtime: 104 ms, faster than 34.18% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 39.7 MB, less than 45.98% of JavaScript online submissions for Kth Largest Element in an Array.
export default (nums, k) => {
  k = nums.length - k;
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const j = partition(nums, low, high);
    if (j < k) {
      low = j + 1;
    } else if (j > k) {
      high = j - 1;
    } else {
      break;
    }
  }
  return nums[k];
};
