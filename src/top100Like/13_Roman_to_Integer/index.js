const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
//  Runtime: 164 ms, faster than 69.49% of JavaScript online submissions for Roman to Integer.
//  Memory Usage: 43.9 MB, less than 96.60% of JavaScript online submissions for Roman to Integer.
export default (s) => {
  let res = 0;
  for (let i = 0; i < s.length; ) {
    const temps = s.substring(i, i + 2);
    if (map[temps]) {
      res += +map[temps];
      i += 2;
    } else {
      res += +map[s.charAt(i)];
      ++i;
    }
  }
  return res;
};
