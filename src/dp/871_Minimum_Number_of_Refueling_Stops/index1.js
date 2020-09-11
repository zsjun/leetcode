/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
export default (target, startFuel, stations) => {
  if (startFuel >= target) return 0;
  // dp[i] 表示路上停留i次可以到达的最长距离
  let dp = [];
  dp[0] = startFuel;

  // for (int i = 0; i < s.length; ++i)
  // for (int t = i; t >= 0 && dp[t] >= s[i][0]; --t)
  // dp[t + 1] = Math.max(dp[t + 1], dp[t] + s[i][1]);

  for (let i = 0; i < stations.length; ++i) {
    // 为了避免重复的，假如从0到i计算的话，假设dp[1] = 100, 在计算dp[2]的时候，不能重复在计算dp[1]的时候，选择的
    // 加油站，也就是每个加油站只能计算一次
    for (let j = i; j >= 0 && dp[j] >= stations[i][0]; j--) {
      if (!dp[j + 1]) dp[j + 1] = 0;
      dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
    }
  }
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] >= target) return i;
  }

  return -1;
};
