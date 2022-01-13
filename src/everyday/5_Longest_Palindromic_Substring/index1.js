var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) {
    return s;
  }
  let res = null;

  const dp = new Array(len);
  // dp[i][j] 如果为true，则表示i到j是回文字符串
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (j === i) {
        dp[i][j] = true;
      } else {
        // 如果长度小于2，或者前面是回文字符串
        if (s.charAt(i) === s.charAt(j) && (j - i < 3 || dp[i + 1][j - 1])) {
          dp[i][j] = true;
        }
      }
      // 或者dp[i][j]
      if (dp[i][j] && (res === null || j - i + 1 > res.length)) {
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
};
