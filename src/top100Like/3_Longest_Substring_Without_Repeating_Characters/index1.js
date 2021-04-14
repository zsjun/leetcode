/**
 * @param {string} s
 * @return {number}
 */
// 考虑字符串s不存在的情况，首先要考虑各种边界情况
//
// 使用dp解决，dp[i]表示以i结尾的字符串的最大字符串，dp[i+1] = dp[i] 或者
export default (s) => {
  if (s.length === 0) return 0;
  const len = s.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i < s.length; i++) {
    const map = new Map();
    map.set(s.charAt(i), 1);
    for (let j = i - 1; j >= 0; --j) {
      if (map.has(s.charAt(j))) {
        dp[i] = Math.max(dp[i - 1], map.size);
        break;
      } else {
        map.set(s.charAt(j), 1);
        dp[i] = Math.max(dp[i - 1], map.size);
      }
    }
  }
  return dp[len - 1];
};
