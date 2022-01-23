/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      const subStr = s.substring(j, i + 1);
      // 如果在word数组中 
      if (
        wordDict.includes(subStr) &&
        ((dp[j - 1] === 1 && j > 0) || j === 0)
      ) {
        dp[i] = 1;
      }
    }
  }
  return dp[s.length - 1];
};
