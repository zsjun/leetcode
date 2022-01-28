/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function (s) {
  if (s.length === 0) return 0;

  const len = s.length;
  const dp = Array(len + 1).fill(0);
  dp[0] = 1;
  dp[1] = s.charAt(0) === "0" ? 0 : 1;

  for (let i = 2; i <= len; i++) {
    if (s.charAt(i - 1) !== "0") {
      dp[i] = dp[i - 1];
    }
    const s2 = +(s.charAt(i - 2) + s.charAt(i - 1));
    if (s2 >= 10 && s2 <= 26) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[len];
};
