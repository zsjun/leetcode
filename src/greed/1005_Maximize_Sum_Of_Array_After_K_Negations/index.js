/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// Runtime: 84 ms, faster than 75.00% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 39.4 MB, less than 73.53% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
export default (A, K) => {
  if (A.length === 0) return 0;
  if (A.length === 1) {
    return K % 2 === 0 ? A[0] : -A[0];
  }
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      break;
    }
    if (A[i] < 0 && K > 0) {
      A[i] = -A[i];
      K--;
    }
    if (A[i] === 0) {
      return A.reduce((a, b) => a + b);
    }
  }
  if (K > 0) {
    A.sort((a, b) => a - b);
    A[0] = K % 2 === 0 ? A[0] : -A[0];
  }
  return A.reduce((a, b) => a + b);
};
