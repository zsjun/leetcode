/**
 * @param {number[][]} pairs
 * @return {number}
 */
//  Runtime: 92 ms, faster than 92.21% of JavaScript online submissions for Maximum Length of Pair Chain.
//  Memory Usage: 42.8 MB, less than 74.03% of JavaScript online submissions for Maximum Length of Pair Chain.
export default (pairs) => {
  if (!pairs || pairs.length === 0) return [];

  if (pairs.length === 1 || pairs.length === 2) return [pairs[0]];
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = [pairs[0]];
  // console.log(pairs);
  for (let i = 1; i < pairs.length; i++) {
    if (pairs[i][0] > dp[dp.length - 1][1]) {
      dp.push(pairs[i]);
    } else if (pairs[i][1] < dp[dp.length - 1][1]) {
      dp[dp.length - 1] = pairs[i];
    }
  }
  // console.log(dp);
  return dp.length;
};
