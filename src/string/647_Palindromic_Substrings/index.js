/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 312 ms, faster than 27.56% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 37.6 MB, less than 100.00% of JavaScript online submissions for Palindromic Substrings.
export default (s) => {
  let count = s.length;
  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      let k = j + i - 1;
      let m = j;
      while (m < k) {
        if (s.charAt(m) === s.charAt(k)) {
          m++;
          k--;
        } else {
          break;
        }
      }
      if (m >= k) {
        count++;
      }
    }
  }
  return count;
};
