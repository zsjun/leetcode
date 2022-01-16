/**
 * @param {string} s
 * @return {string}
 */
// Runtime: 105 ms, faster than 30.42% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 40 MB, less than 82.19% of JavaScript online submissions for Reverse Words in a String.
var reverseWords = function (s) {
  return s.split(" ").reverse().join(" ").replace(/\s+/g, " ").trim();
};
