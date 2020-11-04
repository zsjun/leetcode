const numSquares = (n) => {
  if (n <= 0) {
    return 0;
  }
  let dp = [];
  dp[0] = 0;
  while (dp.length <= n) {
    let max = dp.length;
    let min = Infinity;
    for (let i = 1; Math.pow(i, 2) <= m; i++) {
      min = Math.min(min, dp[m - Math.pow(i, 2)] + 1);
    }
    dp.push(min);
  }
  return dp[n];
};
export default numSquares;
