const numSquares = (n) => {
  if (n <= 0) {
    return 0;
  }
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity;
    for (let j = 1; Math.pow(j, 2) <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  return dp[n];
};
export default numSquares;
