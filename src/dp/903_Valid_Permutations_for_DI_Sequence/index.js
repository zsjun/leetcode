/**
 * @param {string} S
 * @return {number}
 */
export default (S) => {
  let dp = [];
  const len = S.length;
  const mod = Math.pow(10, 9) + 7;
  // S=DID
  // len = 4,所以这里有0，1，2，3四个数字需要放置，
  // dp[i][j] 表示i个数字放置完毕，在剩下的数字里边选择第j位的个数
  // 比如d[3][0] 表示在0，1，2，3中已经选择了三个数字，按照DID的要求已经放置完毕了，然后在剩下的数字里边选择位置为0的数字
  for (let i = 0; i <= len; i++) {
    dp[i] = [];
  }
  // 因为有0，1，2，3 四个数字
  // dp[0][0] = 1, [0]
  // dp[0][1] = 1, [1]
  // dp[0][2] = 1, [2]
  // dp[0][3] = 1, [3]
  for (let i = 0; i <= len; i++) {
    dp[0][i] = 1;
  }
  // 计算dp[len][0]
  for (let i = 0; i < len; i++) {
    if (S.charAt(i) == "I") {
      // 因为已经有i个数字已经被放置好了
      // 比如当i=0的时候，一共需要放0，1，2，3，i=0，就是已经0的位置上已经放置了一个了，
      // 也就是说还有三个数字需要放置，也就是len-i
      for (let j = 0, cur = 0; j < len - i; j++) {
        // 取模
        cur = cur + dp[i][j];
        if (cur > mod) {
          cur = cur % mod;
        }
        dp[i + 1][j] = cur;
      }
    } else {
      // 当S.charAt(i) == "D"的时候，也就是需要降序，
      // 比如有0， 1，2，3， 如果需要放置dp[1][2],则只有一种可能，那就是等于dp[0][3],
      // 不然如果放置了dp[1][2]的时候，在2的位置放置的元素肯定比前面的大，也就是不符合S.charAt(i) == "D"
      for (let j = len - i - 1, cur = 0; j >= 0; j--) {
        cur = cur + dp[i][j + 1];
        if (cur > mod) {
          cur = cur % mod;
        }
        dp[i + 1][j] = cur;
      }
    }
  }
  return dp[len][0];
};
