/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */

var largestNumber = function (cost, target) {
  // DP[i][j] biggest number achievable, considering from digit "9" to digit j in i target
  // DP[i][1] max number formed with exactly i target
  // dp[i][j] 表示从9到j之间符合target为i的最大字符串

  var dp = new Array(target + 1)
    .fill(0)
    .map((el) => new Array(cost.length + 2).fill("0"));
  // dp[10][11];
  // increasing cost to build maximum number from bottom up
  for (let i = 1; i <= target; i++) {
    // highest digit to lowest digit so greater numbers with same size are found first
    for (let j = cost.length; j > 0; j--) {
      //if current digit is more expensive than what we can spend
      // 如果当前的字符大于i，
      if (cost[j - 1] > i) {
        //inherit maximum value from previous digit with the same total cost
        dp[i][j] = dp[i][j + 1];
      }
      //if current digit costs exactly what we can spend
      // 如果等于，则
      else if (cost[j - 1] === i) {
        // if previous (greater) digits could already be used, use them instead
        // 如果前面有大的了，就使用前面的
        if (dp[i][j + 1].length >= 2) {
          dp[i][j] = dp[i][j + 1];
        } else {
          // 直接使用
          // otherwise use this digit as the first used one (as it fully costs our current target)
          dp[i][j] = j + "0";
        }
      }
      // if previous (greater) digits could be used to fully cost our current target, compare number sizes (between picking this one vs the biggest one already found) and pick the max
      // 如果当前减去当前的值，有最大值
      // 也就是当前如果使用该值的话，前面的
      else if (
        dp[i - cost[j - 1]][1].length !== 1 &&
        dp[i][j + 1].length < dp[i - cost[j - 1]][1].length + 1
      ) {
        dp[i][j] = j + dp[i - cost[j - 1]][1];
      } else {
        dp[i][j] = dp[i][j + 1];
      }
    }
  }

  //since the problem stated the number could be too large, we never worked with the actual numbers so here we remove the starting value (represented by string "0") if a valid response was found
  if (dp[target][1].length > 1) {
    return dp[target][1].substring(0, dp[target][1].length - 1);
  }

  return dp[target][1];
};
