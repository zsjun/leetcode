var minCut = function (s) {
  // in case input string is empty, return 0
  if (!s) return 0;

  const len = s.length;

  const dp = Array(len)
    .fill(null)
    .map(() => Array(len).fill(true));

  for (let i = 0; i < len; ++i) {
    for (let j = i; j >= 0; --j) {
      dp[j][i] = s[j] === s[i] && (i - j < 3 || dp[j + 1][i - 1]);
    }
  }

  const minCuts = Array(len + 1).fill(0);
  minCuts[0] = -1;
  minCuts[1] = 0;

  for (let i = 2; i <= len; ++i) {
    // 最大的切割此时
    let m = i;
    for (let j = 1; j <= i; ++j) {
      if (!dp[j - 1][i - 1]) continue;
      m = Math.min(minCuts[j - 1], m);
    }
    minCuts[i] = m + 1;
  }

  return minCuts[len];
};
