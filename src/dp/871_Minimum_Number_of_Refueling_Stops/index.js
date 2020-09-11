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
  let k = 0;
  let hasVisited = [];
  let loopVisited = -1;

  for (let i = 0; i < stations.length; ++i) {
    for (let j = 0; j < stations.length && dp[k] >= stations[j][0]; j++) {
      if (!hasVisited.includes(j)) {
        if (!dp[k + 1]) dp[k + 1] = 0;
        if (dp[k] + stations[j][1] > dp[k + 1]) {
          dp[k + 1] = dp[k] + stations[j][1];
          loopVisited = j;
        }
      }
    }
    k++;
    if (loopVisited !== -1) {
      hasVisited.push(loopVisited);
    }
    loopVisited = -1;
  }
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] >= target) return i;
  }

  return -1;
};
