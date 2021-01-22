/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Runtime: 4132 ms, faster than 5.02% of JavaScript online submissions for Implement strStr().
// Memory Usage: 40 MB, less than 27.63% of JavaScript online submissions for Implement strStr().
export default (haystack, needle) => {
  if (!needle) return 0;
  const len = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      let begin = i;
      let needleBegin = 0;
      while (haystack.charAt(begin) === needle.charAt(needleBegin)) {
        begin++;
        needleBegin++;
        if (needleBegin === len) {
          return i;
        }
      }
    }
  }
  return -1;
};
