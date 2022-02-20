/**
 * @param {string}
 * @return {number}
 */
const ispalind = (s, start, end) => {
  if (start > end) {
    return false;
  }
  while (start <= end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var minCut = function (s) {
  const dp = new Array(s.length + 1).fill(0);
  if (s.charAt(0) === s.charAt(1)) {
    dp[2] = 0;
  } else {
    dp[2] = 1;
  }
  for (let j = 3; j <= s.length; j++) {
    for (let i = 1; i <= j; i++) {
      if (ispalind(s, i - 1, j - 1)) {
        dp[j] = Math.min(dp[i - 1] + 1, dp[j]);
      }
    }
  }
  return dp[s.length];
};
