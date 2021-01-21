/**
 * @param {string} s
 * @return {number}
 */
//  Runtime: 84 ms, faster than 92.50% of JavaScript online submissions for Count Binary Substrings.
//  Memory Usage: 42.2 MB, less than 63.75% of JavaScript online submissions for Count Binary Substrings.
export default (s) => {
  let pre = 0;
  let cur = 1;
  let count = 0;
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === s[i - 1]) {
      ++cur;
    } else {
      pre = cur;
      cur = 1;
    }
    if (pre >= cur) {
      ++count;
    }
  }
  return count;
};
