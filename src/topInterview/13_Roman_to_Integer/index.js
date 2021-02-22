/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 192 ms, faster than 29.04% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 45.1 MB, less than 70.89% of JavaScript online submissions for Roman to Integer.
export default (s) => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let first = s.charAt(i);
    if (map[s.charAt(i + 1)] > 0 && map[s.charAt(i)] < map[s.charAt(i + 1)]) {
      first += s.charAt(i + 1);
      ++i;
    }
    res += map[first];
  }
  return res;
};
