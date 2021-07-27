/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
// Runtime: 112 ms, faster than 70.37% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings.
// Memory Usage: 44.7 MB, less than 70.37% of JavaScript online submissions for Minimum ASCII Delete Sum for Two Strings.
// 如果涉及到Math.min 的时候，还是要分开计算
// 代码越简单，你的思路也越清晰
export default (s1, s2) => {
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = [];
  for (let i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }
  // 惯用技巧，增加边界，为了下面更好的计算
  dp[0][0] = 0;
  for (let i = 1; i <= len2; i++) {
    dp[0][i] = dp[0][i - 1] + s2.charCodeAt(i - 1);
  }
  for (let j = 1; j <= len1; j++) {
    dp[j][0] = dp[j - 1][0] + s1.charCodeAt(j - 1);
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1.charCodeAt(i - 1) === s2.charCodeAt(j - 1)) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      } else {
        dp[i][j] = Math.min(
          s1.charCodeAt(i - 1) + dp[i - 1][j],
          s2.charCodeAt(j - 1) + dp[i][j - 1]
        );
        dp[i][j] = Math.min(
          dp[i][j],
          s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1) + dp[i - 1][j - 1]
        );
      }
    }
  }
  return dp[len1][len2];
};
