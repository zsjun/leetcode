/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (!s) return 0;
  if (s.length === 1) return 1;
  const len = s.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  let res = 0;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);
      if (dp[i][j]) ++res;
    }
  }
  return res;
};
