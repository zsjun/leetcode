/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (s.length === 0) return 0;

  const len = s.length;
  const dp = new Array(len + 1).fill(0);

  dp[0] = 1;
  // 当有一个字符的时候
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= len; i++) {
    // 如果不等于0，肯定是等于dp[n-1]
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    // console.log(dp[i], i);
    // 如果等于0或者小于6的情况下加上dp[n-2]
    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      dp[i] += dp[i - 2];
    }
    // console.log(dp[i], i);
  }
  // console.log(dp);
  return dp[len];
};
