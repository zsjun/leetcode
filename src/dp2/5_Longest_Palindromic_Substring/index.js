/**
 * @param {string} s
 * @return {string}
 */
// dp[i][j] = dp[i + 1][j] ^ (s[i] === s[j]);
export default (s) => {
  const len = s.length;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  let res = "";
  // l是j-i+1的长度
  for (let l = 0; l < len; ++l) {
    for (let i = 0; i + l < len; ++i) {
      let j = i + l;
      if (l === 0) {
        dp[i][j] = true;
      } else if (l === 1) {
        dp[i][j] = s.charAt(i) == s.charAt(j);
      } else {
        dp[i][j] = s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1];
      }
      if (dp[i][j] && l + 1 > res.length) {
        res = s.substring(i, i + l + 1);
      }
    }
  }

  return res;
};
