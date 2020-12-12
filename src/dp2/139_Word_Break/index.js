/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Runtime: 88 ms, faster than 57.62% of JavaScript online submissions for Word Break.
// Memory Usage: 40.5 MB, less than 62.66% of JavaScript online submissions for Word Break.
export default (s, wordDict) => {
  // dp[i] 表示s中前i个字符是否可以在wordDict中表示
  const dp = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      const subStr = s.substring(j, i + 1);
      if (wordDict.includes(subStr) && ((dp[j - 1] === 1 && j > 0) || j === 0)) {
        dp[i] = 1;
      }
    }
  }
  return dp[s.length - 1];
};
