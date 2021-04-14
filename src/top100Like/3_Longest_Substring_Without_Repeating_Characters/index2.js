/**
 * @param {string} s
 * @return {number}
 */
// abba
// Runtime: 96 ms, faster than 97.09% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 41.9 MB, less than 86.06% of JavaScript online submissions for Longest Substring Without Repeating Characters.
export default (s) => {
  if (s.length === 0) return 0;
  const map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; ++i) {
    if (map.has(s.charAt(i))) {
      j = Math.max(j, map.get(s.charAt(i)) + 1);
    }
    map.set(s.charAt(i), i);
    max = Math.max(max, i - j + 1);
  }
  return max;
};
