var minimumDeleteSum = function (s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  const dp = [];
  for (let i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }

  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      if (i === 0 || j === 0) {
        let a = 0;
        for (let z = 1; z <= Math.max(j, i); z++) {
          a += i === 0 ? s2.charCodeAt(z - 1) : s1.charCodeAt(z - 1);
        }
        dp[i][j] = a;
      } else if (s1.charCodeAt(i - 1) === s2.charCodeAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
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
