/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// Runtime: 80 ms, faster than 88.24% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
// Memory Usage: 40 MB, less than 51.47% of JavaScript online submissions for Maximize Sum Of Array After K Negations.
export default (A, K) => {
  if (A.length === 0) return 0;
  if (A.length === 1) {
    return K % 2 === 0 ? A[0] : -A[0];
  }
  A.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0 && K > 0) {
      A[i] = -A[i];
      K--;
    }
  }
  if (K > 0) {
    A[A.length - 1] = K % 2 === 0 ? A[A.length - 1] : -A[A.length - 1];
  }
  return A.reduce((a, b) => a + b);
};
