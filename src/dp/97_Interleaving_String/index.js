/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
export default (s1, s2, s3) => {
  if (!s1 && !s2 && !s3) return true;
  if (s3.length !== s1.length + s2.length) return false;
  let dp = [];
  for (let i = 0; i <= s1.length; i++) {
    dp[i] = [];
  }
  dp[0][0] = true;
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i >= 1 && j >= 1) {
        dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);
      } else if (i >= 1 && j < 1) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
      } else if (i < 1 && j >= 1) {
        dp[i][j] = dp[i][j - 1] && s3[i + j - 1] === s2[j - 1];
      }
    }
  }
  // console.log(dp);
  return dp[s1.length][s2.length];
};
