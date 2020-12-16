/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Runtime: 140 ms, faster than 92.11% of JavaScript online submissions for Ones and Zeroes.
// Memory Usage: 40.9 MB, less than 78.95% of JavaScript online submissions for Ones and Zeroes.
export default (strs, m, n) => {
  const len = strs.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 0; i < len; i++) {
    let ones = 0;
    for (let k1 = 0; k1 < strs[i].length; k1++) {
      if (strs[i][k1] === "1") {
        ones++;
      }
    }
    let zeros = strs[i].length - ones;
    for (let k2 = m; k2 >= zeros; --k2) {
      for (let j = n; j >= ones; --j) {
        dp[k2][j] = Math.max(dp[k2][j], 1 + dp[k2 - zeros][j - ones]);
      }
    }
  }
  return dp[m][n];
};
