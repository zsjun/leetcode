/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
// Runtime: 72 ms, faster than 97.90% of JavaScript online submissions for Reverse String II.
// Memory Usage: 41.6 MB, less than 45.21% of JavaScript online submissions for Reverse String II.
export default (s, k) => {
  if (!s) return "";
  s = s.split("");
  let begin = 0;
  while (begin < s.length) {
    let low = begin;
    let high = begin + k - 1;
    while (low < high) {
      swap(s, low, high);
    }
    begin = begin+2k-1
  }
  return s.join("")
};
