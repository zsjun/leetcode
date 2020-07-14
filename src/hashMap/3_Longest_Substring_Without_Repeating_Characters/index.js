/**
 * @param {string} s
 * @return {number}
 */
// pwwkew;
// "abba"
export default (s) => {
  let slow = 0;
  let map = new Map();
  let max = 0;
  let quick = 0;
  while (quick < s.length) {
    if (!map.has(s.charAt(quick))) {
      map.set(s.charAt(quick), quick);
      quick++;
    } else if (map.get(s.charAt(quick)) >= slow) {
      slow = map.get(s.charAt(quick)) + 1;
      map.set(s.charAt(quick), quick);
      quick++;
    } else if (map.get(s.charAt(quick)) < slow) {
      map.set(s.charAt(quick), quick);
      quick++;
    }
    max = Math.max(max, quick - slow);
  }
  return max;
};
