/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};
const resver = (s) => {
  if (!s || s.length === 0) return "";
  s = s.split("");
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    swap(s, low, high);
    low++;
    high--;
  }
  return s.join("");
};
// Runtime: 88 ms, faster than 78.73% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 45.2 MB, less than 44.49% of JavaScript online submissions for Reverse Words in a String III.
export default (s) => {
  if (!s || s.length === 0) return "";
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] = resver(s[i]);
  }
  return s.join(" ");
};
