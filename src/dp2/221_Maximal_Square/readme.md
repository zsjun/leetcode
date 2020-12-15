### 221. 最大正方形

#### 题目描述

在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。<br/>



例子1<br/>

![38121a5f0e1ab3a7c6a38bc5aff97e91.jpeg](evernotecid://3A8CB360-B2C8-4006-8B95-934CBFE82EE3/appyinxiangcom/13412433/ENNote/p1047?hash=38121a5f0e1ab3a7c6a38bc5aff97e91)



Input:
matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
<br/>

output: 4<br/>

<br/>

例子2<br/>

![7a1e23b526e764e795e12ef50d9bea3f.jpeg](evernotecid://3A8CB360-B2C8-4006-8B95-934CBFE82EE3/appyinxiangcom/13412433/ENNote/p1047?hash=7a1e23b526e764e795e12ef50d9bea3f)


Input:
matrix = [["0","1"],["1","0"]] <br/>

output: 1<br/>

例子3<br/>


Input:
matrix = matrix = [["0"]] <br/>

output: 0<br/>


提示：<br/>


1 m == matrix.length<br/>
2 n == matrix[i].length<br
3 1 <= m, n <= 300<br/>
4 matrix[i][j] 为 '0' 或 '1'


#### 思考

1 题目使用动态规划，这里一看就是使用二维动态规划<br/>

dp[i][j]表示以matrix[i][j]为结尾的1的最大正方形<br/>
那么状态转移方程呢？<br/>

这里状态转移方程从逻辑上很容易发现，但是在代码中很难实现<br/>

刚开始我想求dp[i][j]的值，分别以
dp[i-1][j-1],dp[i][j-1],dp[i-1][j]分别计算出包含matrix[i][j]的最大正方形，可是发现代码写起来特别乱，及时一些测试用例可以过，但是很多测试过不了<br/>

这里的难点就是如何确立简单的状态转移方程？<br/>

不过这里确实不好想到，最多可能就是使用测试用例，一个个总结规律<br/>

假设dp[i][j]的最大正方形是k^2,那么充分条件为 dp[i-1][j-1]、dp[i][j-1] 和 dp[i-1][j] 的值必须 都不小于 (k − 1)^2，否则 (i, j) 位置不可以构成一个边长为 k 的正方形。<br/>

所以如果dp[i-1][j-1]、dp[i][j-1] 和 dp[i-1][j]三个值中的最大正方形的边长最小值为 k − 1，也就是三者的最大正方形都不小于(k − 1)^2，则
dp[i][j] 位置一定且最大可以构成一个边长为 k 的正方形，因为dp[i][j]的最大正方形是k^2

![51dc1ef58e498a3a99383fcc0b07d10f.png](evernotecid://3A8CB360-B2C8-4006-8B95-934CBFE82EE3/appyinxiangcom/13412433/ENResource/p129)


代码比较简单，参考实现1<br/>


#### 实现1

```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */

// Runtime: 84 ms, faster than 94.48% of JavaScript online submissions for Maximal Square.
// Memory Usage: 42.2 MB, less than 29.75% of JavaScript online submissions for Maximal Square.

export default (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 0 || n === 0) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    dp[0][i] = +matrix[0][i];
    max = Math.max(max, dp[0][i]);
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = +matrix[i][0];
    max = Math.max(max, dp[i][0]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
};

```
时间复杂度O（m * n), 空间复杂度O（m * n）