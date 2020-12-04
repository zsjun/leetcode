### 417. 太平洋大西洋水流问题

#### 题目描述

给定一个 m x n 的非负整数矩阵来表示一片大陆上各个单元格的高度。“太平洋”处于大陆的左边界和上边界，而“大西洋”处于大陆的右边界和下边界。<br>

规定水流只能按照上、下、左、右四个方向流动，且只能从高到低或者在同等高度上流动。<br>

请找出那些水流既可以流动到“太平洋”，又能流动到“大西洋”的陆地单元的坐标。

<br>
提示：<br>

  1  输出坐标的顺序不重要<br>
  2  m 和 n 都小于150<br>

<br>


例子1<br>

Input: <br/>
给定下面的 5x5 矩阵:

  太平洋 ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * 大西洋

<br>
output：[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (上图中带括号的单元). <br>



#### 思考 1

最简单的想法肯定是遍历每个节点，然后看下每个节点是否能够分别到达大西洋和太平洋，但是这里有个问题，超时了。<br>
可以实现1<br>

这里有另外一种方法，就是逆向思维，让水往里边灌，如果一个节点，太平洋的水可以到达，大西洋的水也可以到达，那么肯定可以实现。<br>

这里其实以前做过一道类似的，也是通过水往里边灌水，但是在这里的时候，仍然没有考虑到。<br>

可以看下实现2<br>

#### 实现1

```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 辅函数
const dfs = (matrix, curI, curJ, visited, hadEnd) => {
  if (curI === 0 || curJ === 0) {
    hadEnd[0] = true;
  }
  if (curI === matrix.length - 1 || curJ === matrix[0].length - 1) {
    hadEnd[1] = true;
  }
  let nextI;
  let nextJ;
  visited[curI][curJ] = 1;
  for (let i = 0; i < 4; ++i) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length) {
      if (matrix[nextI][nextJ] <= matrix[curI][curJ] && visited[nextI][nextJ] === 0) {
        dfs(matrix, nextI, nextJ, visited, hadEnd);
      }
    }
  }
  visited[curI][curJ] = 0;
};
// 主函数
export default (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const visited = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
  }

  let res = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // hadEnd[0] 表示到达Pacti，hadEnd[0] 表示到达Anti
      let hadEnd = [false, false];
      dfs(matrix, i, j, visited, hadEnd);
      // 如果都到达，则加入
      if (hadEnd[0] && hadEnd[1]) {
        res.push([i, j]);
      }
    }
  }
  return res;
};


```

#### 实现2
```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 辅函数
const dfs = (matrix, curI, curJ, reach) => {
  let nextI;
  let nextJ;
  if (reach[curI][curJ]) {
    return;
  }
  reach[curI][curJ] = 1;
  for (let i = 0; i < 4; i++) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length) {
      if (matrix[nextI][nextJ] >= matrix[curI][curJ] && reach[nextI][nextJ] === 0) {
        dfs(matrix, nextI, nextJ, reach);
      }
    }
  }
};

// Runtime: 112 ms, faster than 94.23% of JavaScript online submissions for Pacific Atlantic Water Flow.
// Memory Usage: 46.9 MB, less than 64.74% of JavaScript online submissions for Pacific Atlantic Water Flow.
export default (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const canReachPacific = [];
  const canReachAtlantic = [];
  for (let i = 0; i < m; i++) {
    canReachPacific[i] = new Array(n).fill(0);
    canReachAtlantic[i] = new Array(n).fill(0);
  }
  let res = [];
  for (let i = 0; i < m; i++) {
    dfs(matrix, i, 0, canReachPacific);
  }
  for (let i = 0; i < n; i++) {
    dfs(matrix, 0, i, canReachPacific);
  }
  for (let i = 0; i < m; i++) {
    dfs(matrix, i, n - 1, canReachAtlantic);
  }
  for (let i = 0; i < n; i++) {
    dfs(matrix, m - 1, i, canReachAtlantic);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canReachPacific[i][j] === 1 && canReachAtlantic[i][j] === 1) {
        res.push([i, j]);
      }
    }
  }
  return res;
};

```

实现1算法时间复杂度 O (m*n), 因为这里最多遍历 m*n个节点4次, 空间复杂度 O(1)<br/>

实现2算法时间复杂度 O (m*n), 因为这里最多遍历 m*n个节点4次, 空间复杂度 O(1)<br/>



## 回溯法

回溯法(backtracking)是优先搜索的一种特殊情况，又称为试探法，常用于需要记录节点状
态的深度优先搜索。通常来说，排列、组合、选择类问题使用回溯法比较方便。<br/>

回溯其实也很简单，其实和普通的深度搜索没什么区别，就是发现不合适可以退出<br/>
