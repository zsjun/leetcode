/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 100 ms, faster than 58.99% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 40.3 MB, less than 48.07% of JavaScript online submissions for Palindromic Substrings.
export default (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let begin = i;
    let end = i;
    while (begin >= 0 && end <= s.length && s.charAt(begin) === s.charAt(end)) {
      count++;
      begin--;
      end++;
    }

    begin = i;
    end = i + 1;
    while (begin >= 0 && end <= s.length && s.charAt(begin) === s.charAt(end)) {
      count++;
      begin--;
      end++;
    }
  }
  return count;
};
