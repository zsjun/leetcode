/**
 * @param {number} num
 * @return {number[]}
 */

// Runtime: 96 ms, faster than 83.28% of JavaScript online submissions for Counting Bits.
// Memory Usage: 44.6 MB, less than 47.00% of JavaScript online submissions for Counting Bits.

export default (num) => {
  let res = [0];
  for (let i = 1; i <= num; i++) {
    let bits = 0;
    while (i !== 0) {
      bits++;
      i &= i - 1;
    }
    res.push(bits);
  }
  return res;
};
