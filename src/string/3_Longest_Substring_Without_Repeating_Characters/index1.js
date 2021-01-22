// Runtime: 108 ms, faster than 83.81% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 41.9 MB, less than 86.43% of JavaScript online submissions for Longest Substring Without Repeating Characters.
export default (s) => {
  if (!s) return 0;
  const map = new Map();
  let max = 1;
  let begin = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      const iIndex = map.get(s.charAt(i));
      if (begin <= iIndex) {
        max = Math.max(i - map.get(s.charAt(i)), max);
        begin = map.get(s.charAt(i)) + 1;
        map.set(s.charAt(i), i);
      } else {
        max = Math.max(i - begin + 1, max);
        map.set(s.charAt(i), i);
      }
    } else {
      max = Math.max(i - begin + 1, max);
      map.set(s.charAt(i), i);
    }
  }
  // console.log(max);
  return max;
};
