### 64. 最小路径和

#### 题目描述

给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。<br/>

说明：每次只能向下或者向右移动一步。<br/>

例子1<br/>

Input:  grid = [[1,3,1],[1,5,1],[4,2,1]] <br/>

output: 7<br/>

解释：因为路径 1→3→1→1→1 的总和最小。
<br/>

例子2<br/>

Input:  grid = [[1,2,3],[4,5,6]] <br/>

output: 12<br/>




提示：<br/>


1 m == grid.length<br/>
2 n == grid[i].length<br
3 1 <= m, n <= 200<br/>
4 0 <= grid[i][j] <= 100<br/>



#### 思考

1 题目比较简单，状态转移方程很容易就可以看出来<br/>

dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];<br/>

参考实现1<br/>


#### 实现1

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
// Runtime: 84 ms, faster than 68.34% of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 41.1 MB, less than 30.49% of JavaScript online submissions for Minimum Path Sum.
export default (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  if (m === 1 && n === 1) {
    return grid[0][0];
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // dp[0];
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1];
};


```
时间复杂度O（m * n), 空间复杂度O（m * n）