const wordBreak = (s, wordDict) => {
  let dp = [];
  // dp[]
  dp[0] = [];
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < wordDict.length; i++) {
    min = Math.min(min, wordDict.length);
    max = Math.max(max, wordDict.length);
  }
  for (let i = 1; i <= s.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= i && i - j <= max && i - j >= min; j++) {
      if (wordDict.includes(s.substring(j, i))) {
        if (dp[j].length === 0) {
          dp[i].push([s.substring(j, i)]);
        } else {
          for (let k = 0; k < dp[j].length; k++) {
            dp[i].push([...dp[j][k], s.substring(j, i)]);
          }
        }
      }
    }
  }
  for (let i = 0; i < dp[s.length].length; i++) {
    if (dp[s.length][i].join("").length !== s.length) {
      dp[s.length][i] = "";
    } else {
      dp[s.length][i] = dp[s.length][i].join(" ");
    }
  }
  return dp[s.length].filter((item) => item);
};
export default wordBreak;
