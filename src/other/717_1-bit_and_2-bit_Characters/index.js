/**
 * @param {number[]} bits
 * @return {boolean}
 */
// o(n)
// Runtime: 76 ms, faster than 83.18% of JavaScript online submissions for 1-bit and 2-bit Characters.
// Memory Usage: 38.5 MB, less than 84.55% of JavaScript online submissions for 1-bit and 2-bit Characters.
export default (bits) => {
  let i = 0;
  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      i += 2;
    } else {
      i++;
    }
  }
  return bits[i] === 0;
};
