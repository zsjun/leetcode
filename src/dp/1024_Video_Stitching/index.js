/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
// console.log
export default (clips, T) => {
  let dp = new Array(T + 1);
  dp.fill(T + 1);
  dp[0] = 0;
  // dp[i]表示到达i的步数
  for (let i = 0; i <= T; i++) {
    for (let j = 0; j < clips.length; j++) {
      if (i >= clips[j][0] && i <= clips[j][1]) {
        dp[i] = Math.min(dp[i], dp[clips[j][0]] + 1);
      }
    }
    if (dp[i] === T + 1) {
      return -1;
    }
  }
  return dp[T];
};
