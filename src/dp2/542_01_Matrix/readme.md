### 542. 01 矩阵

#### 题目描述

给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。<br/>



例子1<br/>

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]<br/>

output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]<br/>

<br/>

例子2<br/>

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]] <br/>

output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]<br/>




提示：<br/>


1 给定矩阵的元素个数不超过 10000。<br/>
2 给定矩阵中至少有一个元素是 0。<br
3 矩阵中的元素只在四个方向上相邻: 上、下、左、右。<br/>


#### 思考

1 状态转移方程很好找，如果matrix[i][j]等于1，则dp[i][j]是四个方向中最小的值加1<br/>

但是很明显这样不对，因为就会形成循环了<br/>

那么如果避免死循环呢<br/>

后来想到了可以先从上到下遍历一遍，然后再从下到上遍历一遍，可是发现这样有个情况不是很好处理，那就是不管从上到下，还是从下到上，到matrix[0][0]等于0的时候，如何设置dp[0][0]?<br/>

可以想想应该如何设置？<br/>

后来才发现，因为是需要找到最小的，我们刚开是就直接设置dp的每个值是MAX_VALUE就可以了，如果从上到下，肯定能找到最小的<br/>

当时陷入了一个怪区，总是希望先设置完dp[0][0],才能从上到下遍历


参考实现1<br/>


#### 实现1

```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// Runtime: 148 ms, faster than 96.10% of JavaScript online submissions for 01 Matrix.
// Memory Usage: 46.8 MB, less than 79.22% of JavaScript online submissions for 01 Matrix.
export default (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 0) {
    return [[]];
  }
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(Number.MAX_VALUE);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dp[i][j] = 0;
      } else {
        if (i > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
        }
        if (j > 0) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] != 0) {
        if (i < m - 1) {
          dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
        }
        if (j < n - 1) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
      }
    }
  }
  return dp;
};
```
时间复杂度O（m * n), 空间复杂度O（m * n）