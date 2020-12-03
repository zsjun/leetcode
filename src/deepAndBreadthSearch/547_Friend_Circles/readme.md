## 547. 朋友圈

### 题目描述

班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。<br>

给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。
<br>


例子1<br>

Input: <br/>
[[1,1,0],
 [1,1,0],
 [0,0,1]]<br>
output：2 <br>
已知学生 0 和学生 1 互为朋友，他们在一个朋友圈。
第2个学生自己在一个朋友圈。所以返回 2 。<br/>

例子2<br>
Input: <br/>
[[1,1,0],
 [1,1,1],
 [0,1,1]]<br>
output：1 <br>
已知学生 0 和学生 1 互为朋友，学生 1 和学生 2 互为朋友，所以学生 0 和学生 2 也是朋友，所以他们三个在一个朋友圈，返回 1 。<br/>

提示： <br>

1  1 <= N <= 200<br>
2  M[i][i] == 1<br>
3  M[i][j] == M[j][i]<br>


### 思考 1

这里和695差不多，只不过在搜索过程中，当搜到一个1的时候，我们就相当于发现了一个朋友圈，一个人自己和自己也是一个朋友圈，当我们发现了一个朋友圈之后，我们就深度搜索这个朋友圈，直到搜索完整个朋友圈。<br>
可以实现1<br>

这个时候可以换个思路，因为只有m个人，那肯定最多只能有m个朋友圈，我们可以挨着朋友圈去深度遍历，发现一个朋友圈，深度遍历在该朋友圈以内的。<br>

可以看下实现2<br>

### 实现1

```js
/**
 * @param {number[][]} M
 * @return {number}
 */

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dfs = (M, curI, curJ) => {
  M[curI][curJ] = 0;
  for (let i = 0; i < M[0].length; i++) {
    const nextJ = i;
    const nextI = curI;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
  for (let i = 0; i < M.length; i++) {
    const nextI = i;
    const nextJ = curI;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }

  for (let i = 0; i < M.length; i++) {
    const nextI = curJ;
    const nextJ = i;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
  for (let i = 0; i < M.length; i++) {
    const nextI = i;
    const nextJ = curJ;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
};
export default (M) => {
  if (M.length === 1) return 1;
  const m = M.length;
  const n = M[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        dfs(M, i, j);
        res++;
      }
    }
  }
  return res;
};

```

### 实现2
```js
/**
 * @param {number[][]} M
 * @return {number}
 */
const dfs = (M, i, circles) => {
  // 已经访问过了
  circles[i] = 1;
  // 遍历和自己有关系的朋友
  for (let j = 0; j < M.length; j++) {
    if (circles[j] === 0 && M[i][j] === 1 && j !== i) {
      dfs(M, j, circles);
    }
  }
};
// Runtime: 84 ms, faster than 86.26% of JavaScript online submissions for Friend Circles.
// Memory Usage: 40.2 MB, less than 94.94% of JavaScript online submissions for Friend Circles.
export default (M) => {
  if (M.length === 1) return 1;
  const m = M.length;
  const n = M[0].length;
  let res = 0;
  const circles = new Array(m).fill(0);
  // 最多一共有m个朋友圈
  for (let i = 0; i < m; i++) {
    if (circles[i] === 0) {
      dfs(M, i, circles);
      res++;
    }
  }
  return res;
};

```

实现1算法时间复杂度 O(n^2)，因为这里最多遍历n^2个节点, 空间复杂度 O(1)<br/>
实现2算法时间复杂度 O(n^2), 空间复杂度 O(1)<br/>