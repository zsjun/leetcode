// Runtime: 76 ms, faster than 76.47% of JavaScript online submissions for Arithmetic Slices.
// Memory Usage: 38.4 MB, less than 51.96% of JavaScript online submissions for Arithmetic Slices.
export default (A) => {
  if (!A || A.length < 3) return [];
  const len = A.length;
  const dp = new Array(len).fill(0);
  for (let i = 2; i < len; ++i) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  // console.log(dp);
  return dp.reduce((a, b) => a + b);
};
