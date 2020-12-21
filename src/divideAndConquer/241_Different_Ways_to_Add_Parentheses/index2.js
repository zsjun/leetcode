/**
 * @param {string} input
 * @return {number[]}
 */
// Runtime: 72 ms, faster than 94.74% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 39 MB, less than 86.84% of JavaScript online submissions for Different Ways to Add Parentheses.
const diffWaysToCompute = (input, map) => {
  if (input.length === 0 || !input) return [];
  const oprs = [];
  const nums = [];
  let begin = 0;
  // 计算出有input中有多少个操作符和多少个数字
  for (let i = 0; i < input.length; i++) {
    const charI = input.charAt(i);
    if (charI == "+" || charI == "-" || charI == "*") {
      oprs.push(charI);
      nums.push(+input.substring(begin, i));
      begin = i + 1;
    }
  }
  // 把最后一个数字加入
  nums.push(+input.substring(begin));

  const numsLen = nums.length;
  const dp = [];
  // dp[i][j]表示input中数字nums[i]到数字nums[j]的之间的结果
  for (let i = 0; i < numsLen; i++) {
    dp[i] = [];
    for (let j = 0; j < numsLen; j++) {
      dp[i][j] = [];
    }
  }

  // 遍历已经发现的所有数字
  for (let i = 0; i < numsLen; i++) {
    // 计算0到i的结果
    for (let j = i; j >= 0; j--) {
      // 如果只是一个数字，直接加入
      if (i === j) {
        dp[j][i].push(nums[i]);
      } else {
        // dp[j][i] 等于dp[j][k]和dp[k+1][i]相乘
        for (let k = j; k < i; k += 1) {
          for (let left of dp[j][k]) {
            for (let right of dp[k + 1][i]) {
              let val = 0;
              switch (oprs[k]) {
                case "+":
                  val = left + right;
                  break;
                case "-":
                  val = left - right;
                  break;
                case "*":
                  val = left * right;
                  break;
              }
              dp[j][i].push(val);
            }
          }
        }
      }
    }
  }
  if (dp[0][numsLen - 1].length === 0) {
    dp[0][numsLen - 1].push(+input);
  }
  return dp[0][numsLen - 1];
};

export default diffWaysToCompute;
