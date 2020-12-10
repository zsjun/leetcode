/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 72 ms, faster than 88.54% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.3 MB, less than 56.43% of JavaScript online submissions for Climbing Stairs.
export default (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let pre1 = 1;
  let pre2 = 2;
  for (let i = 3; i <= n; i++) {
    const temp = pre2;
    pre2 = pre1 + pre2;
    pre1 = temp;
  }
  return pre2;
};
