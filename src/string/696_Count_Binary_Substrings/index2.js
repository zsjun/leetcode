// Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Count Binary Substrings.
// Memory Usage: 42.1 MB, less than 77.50% of JavaScript online submissions for Count Binary Substrings.
export default (s) => {
  let cur = 1;
  let pre = 0;
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
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
