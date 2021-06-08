/**
 * @param {number[]} nums
 * @return {number}
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// Runtime: 144 ms, faster than 14.92% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 54.3 MB, less than 39.24% of JavaScript online submissions for First Missing Positive.
export default (nums) => {
  const len = nums.length;
  let i = 0;
  while (i < len) {
    if (nums[i] > 0 && nums[i] <= len && i !== nums[i] - 1 && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, nums[i] - 1, i);
    } else {
      ++i;
    }
  }
  for (let i = 0; i < len; ++i) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return len + 1;
};
