/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// Runtime: 96 ms, faster than 98.47% of JavaScript online submissions for Reverse String.
// Memory Usage: 46.2 MB, less than 21.90% of JavaScript online submissions for Reverse String
export default (s) => {
  if (!s || s.length === 0) return;
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    swap(s, low, high);
    low++;
    high--;
  }
};
