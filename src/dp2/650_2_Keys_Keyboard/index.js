/**
 * @param {number} n
 * @return {number}
 */
// A
// 3

// dp[i] a1次
// dp[i+1]
// dp[i+1/2]+2
// dp[i/2]+2 +2

// dp[0] = 0
// dp[1] = 0
// dp[2] = 2
// dp[3] = 3
// dp[4] = 4
// dp[5]=
export default (n) => {
  const dp = new Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 2, i);
    } else {
      dp[i] = Math.min(dp[i], i);
      for (let k = 3; k < i; k++) {
        if (i % k === 0) {
          dp[i] = Math.min(dp[i], dp[i / k] + i / k);
        }
      }
    }
  }
  return dp[n];
};
