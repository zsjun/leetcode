/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // dp[i]表示s[0, i]是否可以被wordDict表示
  let dp = [];
  // dp[]
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    dp[i] = false;
    for (let j = 0; j <= i; j++) {
      // console.log(s.substring(j, i));
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length];
};

export default wordBreak;
