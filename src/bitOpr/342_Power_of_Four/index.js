/**
 * @param {number} n
 * @return {boolean}
 */
// Runtime: 84 ms, faster than 97.69% of JavaScript online submissions for Power of Four.
// Memory Usage: 39.9 MB, less than 48.52% of JavaScript online submissions for Power of Four.
export default (n) => {
  // 如果是4的平方必须符合三种情况
  // 1 n > 0
  // 2 n是2的平方 也就是n & n-1
  // 3 n里边所有1的位置都在奇数位上
  return n > 0 && (n & (n - 1)) === 0 && (n & 0b1010101010101010101010101010101) > 0;
};
