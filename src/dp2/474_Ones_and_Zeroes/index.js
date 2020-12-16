/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// ["10", "0001", "111001", "1", "0"];
// 5;
// 3;

// ["011111", "001", "001"], 4, 5;
const memo = (dp, start, m, n, size, strs) => {
  if (start >= size || m < 0 || n < 0) return 0;
  if (m === 0 && n === 0) return 0;
  // console.log(dp[start][m], start, m, n);
  if (dp[start][m][n] != -1) return dp[start][m][n];

  let res = 0;
  let i = start;
  let ones = 0;
  for (let k1 = 0; k1 < strs[i].length; k1++) {
    if (strs[i][k1] === "1") {
      ones++;
    }
  }
  let zeros = strs[i].length - ones;
  if (zeros <= m && ones <= n) {
    // 如果选择，则选择其中选择或者不选择中的最大的
    res = Math.max(1 + memo(dp, i + 1, m - zeros, n - ones, size, strs), memo(dp, i + 1, m, n, size, strs));
  } else {
    // 如果不符合规则，则直接下一个 
    res = memo(dp, i + 1, m, n, size, strs);
  }
  dp[start][m][n] = res;
  return res;
};
// Runtime: 496 ms, faster than 34.21% of JavaScript online submissions for Ones and Zeroes.
// Memory Usage: 103 MB, less than 28.95% of JavaScript online submissions for Ones and Zeroes.
export default (strs, m, n) => {
  const len = strs.length;
  const dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let k = 0; k <= m; k++) {
      dp[i][k] = new Array(n + 1).fill(-1);
    }
  }
  return memo(dp, 0, m, n, len, strs);
};
