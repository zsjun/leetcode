/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 80 ms, faster than 95.97% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 39.3 MB, less than 80.17% of JavaScript online submissions for Palindromic Substrings.
// "aaaaa"

// 0 2   00 01
// 1 6   11 02 12 03
// 2 11  22 13 04 23 14
// 3 14  33 24 34
// 4 15  44 45

const extendSubstrings = (s, begin, end) => {
  let count = 0;
  while (begin >= 0 && end < s.length && s[begin] === s[end]) {
    --begin;
    ++end;
    ++count;
  }
  return count;
};
export default (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += extendSubstrings(s, i, i); // 奇数长度
    count += extendSubstrings(s, i, i + 1); // 偶数长度
  }
  return count;
};
