/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 88 ms, faster than 68.48% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 39.4 MB, less than 43.21% of JavaScript online submissions for Factorial Trailing Zeroes.
const trailingZeroes = (n) => {
  if (n <= 4) return 0;
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};
export default trailingZeroes;
