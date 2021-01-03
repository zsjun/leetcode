/**
 * @param {number} num
 * @return {number}
 */
// Runtime: 72 ms, faster than 94.29% of JavaScript online submissions for Number Complement.
// Memory Usage: 38.8 MB, less than 30.00% of JavaScript online submissions for Number Complement.
export default (n) => {
  let mask = 1;
  while (mask < n) {
    mask = (mask << 1) | 1;
  }
  return ~n & mask;
};
