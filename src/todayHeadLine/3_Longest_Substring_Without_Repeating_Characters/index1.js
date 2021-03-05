/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (s.length === 0) return "";
  const len = s.length;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    if (s.substring(i - 1 - dp[i - 1], i).indexOf(s.charAt(i)) === -1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      for (let j = i - 1 - dp[i - 1]; j < i; j++) {
        if (s.charAt(j) === s.charAt(i)) {
          dp[i] = i - j;
        }
      }
    }
  }
  return Math.max(...dp);
};
