/**
 * @param {number} n
 * @return {boolean}
 */
//  Runtime: 76 ms, faster than 80.61% of JavaScript online submissions for Binary Number with Alternating Bits.
//  Memory Usage: 38.7 MB, less than 54.08% of JavaScript online submissions for Binary Number with Alternating Bits.
export default (n) => {
  n = n ^ Math.floor(n >> 1);
  return !(n & (n + 1));
};
