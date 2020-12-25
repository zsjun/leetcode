/**
 * @param {number} n
 * @return {boolean}
 */
// Runtime: 264 ms, faster than 43.36% of JavaScript online submissions for Power of Three.
// Memory Usage: 49.6 MB, less than 27.27% of JavaScript online submissions for Power of Three.
export default (n) => {
  if (n === 1) return true;
  if (n < 3) return false;
  let sum = 1;
  while (sum < n) {
    sum *= 3;
  }
  return sum === n;
};
