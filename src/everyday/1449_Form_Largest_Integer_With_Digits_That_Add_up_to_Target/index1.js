/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

var largestNumber = function (cost, target) {
  const m = target;
  // 为了从底向上进行推算
  const n = cost.length + 2;
  // dp[i][j] 表示target为i的时候，从9到j的最大表示，因为cost的长度最长为9
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n).fill("0");
  }
  for (let i = 1; i <= m; i++) {
    for (let j = cost.length; j > 0; j--) {
      // 如果当前的数字比i还大，那么只能不使用该数字，看看前面的有没有更大的值
      if (cost[j - 1] > i) {
        dp[i][j] = dp[i][j + 1];
      } else if (cost[j - 1] === i) {
        // 此时有两种情况，
        // 第一种情况是前面已经有更大的值了，所以此时也放弃
        if (dp[i][j + 1].length > 1) {
          dp[i][j] = dp[i][j + 1];
        } else {
          // 如果前面没用的话，此时使用该索引
          dp[i][j] = j + "0";
        }
        // 还有另外一种情况，如果此时使用了该索引
        // 那么dp[i-cost[j-1]][1] 如果此时该值有最大值了，并且
        // dp[i][j+1]此时的长度小于dp[i-cost[j-1]][1]+1,那么就使用
      } else if (
        dp[i - cost[j - 1]][1].length > 1 &&
        dp[i - cost[j - 1]][1].length + 1 > dp[i][j + 1].length
      ) {
        dp[i][j] = j + dp[i - cost[j - 1]][1];
      } else {
        dp[i][j] = dp[i][j + 1];
      }
    }
  }
  if (dp[m][1].length > 1) {
    return dp[m][1].substring(0, dp[m][1].length - 1);
  }
  return dp[m][1];
};
