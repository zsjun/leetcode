/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// Runtime: 84 ms, faster than 93.00% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 40.2 MB, less than 76.19% of JavaScript online submissions for Reverse Bits.
export default (n) => {
  if (n === 0) return 0;
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }
  return result >>> 0;
};
