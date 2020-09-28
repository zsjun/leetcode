/**
 * @param {string} p
 * @return {number}
 */
// 主要思想就是发现s中是连续的"zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"，
// 如果发现在p中所有连续的以z，a,b,c。。。结束的字符串的长度等于我们要求的解
export default (p) => {
  if (!p) return 0;
  if (p.length === 1) {
    return 1;
  }
  const dp = new Array(26);
  dp.fill(0);

  for (let i = 0; i < p.length; i++) {
    dp[p.charCodeAt(i) - 97] = 1;
  }
  // console.log(dp);
  let maxCount = 0;
  for (let i = 0; i < p.length; i++) {
    // if (i === 0) {
    //   dp[p.charCodeAt(0) - 97] = 1;
    // }

    if (p.charCodeAt(i) - p.charCodeAt(i - 1) === 1 || p.charCodeAt(i - 1) - p.charCodeAt(i) === 25) {
      maxCount++;
    } else {
      maxCount = 1;
    }
    // console.log(maxCount);
    dp[p.charCodeAt(i) - 97] = Math.max(dp[p.charCodeAt(i) - 97], maxCount);
  }
  // console.log(dp);
  return dp.reduce((a, b) => a + b);
};
