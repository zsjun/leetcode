/**
 * @param {string} s
 * @return {number}
 */
// dp[3] = dp[1]+dp[2]
// Runtime: 104 ms, faster than 22.88% of JavaScript online submissions for Decode Ways.
// Memory Usage: 42.5 MB, less than 15.00% of JavaScript online submissions for Decode Ways.
export default (s) => {
  if (s.length === 1 && +s > 0) {
    return 1;
  } else if (s.length === 1 || s[0] === "0") {
    return 0;
  }
  const dp = [];
  dp[0] = +s[0] > 0 ? 1 : 0;
  dp[1] = +s[1] > 0 ? dp[0] + 1 : dp[0];

  if (+s.substring(0, 2) > 26 && +s[0] > 0 && s[1] !== "0") {
    dp[1] = 1;
  } else if (+s.substring(0, 2) > 26 && +s[0] > 0 && s[1] === "0") {
    return 0;
  }

  for (let i = 2; i < s.length; i++) {
    if (s[i] === "0" && +s.substring(i - 1, i + 1) < 27 && +s.substring(i - 1, i + 1) > 9) {
      dp[i] = dp[i - 2];
    } else if (+s[i - 1] > 0 && +s[i] > 0 && +s.substring(i - 1, i + 1) > 10 && +s.substring(i - 1, i + 1) < 27) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else if ((+s[i - 1] === 0 && +s[i] > 0) || (+s[i - 1] > 0 && +s[i] > 0 && +s.substring(i - 1, i + 1) > 26)) {
      dp[i] = dp[i - 1];
    } else if ((+s[i] === 0 && +s.substring(i - 1, i + 1) > 26) || (+s[i - 1] === 0 && +s[i] === 0)) {
      return 0;
    }
  }
  // console.log(dp);
  return dp[dp.length - 1];
};
