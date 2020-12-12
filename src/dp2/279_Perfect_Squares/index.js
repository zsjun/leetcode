/**
 * @param {number} n
 * @return {number}
 */

// Input:  n = 12<br/>
// output: 3<br/>

// 解释：12 = 4 + 4 + 4.
// <br/>

// 例子2<br/>
// Input:  n = 13 <br/>
// output: 2<br/>
// 解释：13 = 4 + 9.

// dp[13] = dp[]

// dp[1] = 1
// dp[2] = 1+1
// dp[n] = dp[n-]
export default (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  const dp = [];
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    const sqrtN = Math.floor(Math.sqrt(i));
    for (let j = 1; j <= sqrtN; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
