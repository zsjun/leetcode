/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// dp[i][j] 表示到s i-1和到p j-1是否匹配
const isMatch = (s, p) => {
  const sLen = s.length;
  const pLen = p.length;
  let dp = [];
  for (let i = 0; i < sLen; i++) {
    dp[i] = new Array(pLen).fill(false);
  }
  dp[0][0] = true;
  // dp[0][0] = false;
  // dp[1][0] = false;
  // dp[0][1] = false;

  // if (s[0] === p[0] || p[0] === ".") {
  //   dp[0][0] = true;
  // } else {
  //   dp[0][0] = false;
  // }
  // if (dp[0][0] && p[1] === "*") {
  //   dp[0][1] = true;
  // } else {
  //   dp[0][1] = false;
  // }
  // dp[1][0] = false;
  dp[0][1] = false;
  for (let j = 1; j < p.length; j++) {
    if (p[j] === "*" && dp[0][j - 1]) {
      dp[0][j] = true;
    } else {
      dp[0][j] = false;
    }
  }
  // for (let j = 1; j < s.length; j++) {
  //   if (p[])
  //   dp[j][0] = false;
  // }

  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < pLen; j++) {
      if (s[i] === p[j] || p[j] === ".") {
        dp[i][j] === dp[i - 1][j - 1];
      }
      if (p[j] === "*") {
        if (p[j - 1] !== s[i]) {
          dp[i][j] = dp[i][j - 2];
        } else if (p[j - 1] === s[i] || p[j - 1] === ".") {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i][j - 2];
        }
      }
    }
  }
  console.log(dp);
  return dp[s.length - 1][p.length - 1];
};

export default isMatch;
