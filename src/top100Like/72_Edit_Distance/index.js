/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//  "horse"
//  "ros"

// Runtime: 152 ms, faster than 17.91% of JavaScript online submissions for Edit Distance.
// Memory Usage: 42.5 MB, less than 88.43% of JavaScript online submissions for Edit Distance.

// 注意边界条件的处理，尽量空出一个空位置，看下是否更容易实现，比如这里我就是使用从word1的0位置开始，这就会增加
// 逻辑的复杂性，因为这时候就需要判断是否判断两者是否相等，是否不相等
export default (word1, word2) => {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }
  for (let i = 0; i <= len2; i++) {
    dp[0][i] = i;
  }
  for (let j = 0; j <= len1; j++) {
    dp[j][0] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 插入
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j]);
      }
    }
  }
  return dp[len1][len2];
};
