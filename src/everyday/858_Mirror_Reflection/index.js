/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
// Runtime: 96 ms, faster than 57.14% of JavaScript online submissions for Mirror Reflection.
// Memory Usage: 38.4 MB, less than 100.00% of JavaScript online submissions for Mirror Reflection.
export default (p, q) => {
  while (p % 2 === 0 && q % 2 === 0) {
    p /= 2;
    q /= 2;
  }
  if (p % 2 == 0) return 2;
  if (q % 2 == 0) return 0;
  return 1;
};
