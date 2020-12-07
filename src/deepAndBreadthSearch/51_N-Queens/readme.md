### 51 N皇后问题


#### 题目描述

给定一个大小为 n 的正方形国际象棋棋盘，求有多少种方式可以放置 n 个皇后并使得她们互 不攻击，即每一行、列、左斜、右斜最多只有一个皇后。<br/>

例子1 <br/>

input：4<br/>

output：[
 [".Q..", // Solution 1
  "...Q",
  "Q...",
  "..Q."],
 ["..Q.", // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]<br/>



例子2 <br/>

input：1<br/>
output：[["Q"]]<br/>

提示：<br/>

1 <= n <= 9<br/>


#### 思考1

题目虽然在leetcode上显示是困难，但是思想其实很简单，就是通过简单的回溯来解决<br/>

这里需要注意的是传递数组得注意传递复制的数组<br/>

不能重复遍历，比如在在i，j这个位置遍历到下一个位置了，肯定不能再重新遍历回到i，j这个位置了<br/>

思路比较简单，但是代码可以写的很复杂，也可以写的很简单<br/>

实现1<br/>

实现2<br/>


#### 实现1

```js
 /**
 * @param {number} n
 * @return {string[][]}
 */
const copy = (dfsRes) => {
  const res = [];
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      res[j] = new Array(dfsRes[0].length).fill(0);
    }
  }
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      res[i][j] = dfsRes[i][j];
    }
  }
  return res;
};
const dfs = (dfsRes, level, res) => {
  if (level === dfsRes.length) {
    let temp = [];
    dfsRes.forEach((item) => {
      temp.push(item.join(""));
    });
    console.log(temp);
    res.push(temp);
    return;
  }
  for (let i = 0; i < dfsRes.length; i++) {
    if (canSet(dfsRes, level, i)) {
      dfsRes[level][i] = "Q";
      const temp = copy(dfsRes);
      dfs(temp, level + 1, res);
      dfsRes[level][i] = ".";
    }
  }
};

const canSet = (dfsRes, curI, curJ) => {
  for (let i = 0; i < dfsRes.length; i++) {
    for (let j = 0; j < dfsRes[0].length; j++) {
      if (dfsRes[i][j] === "Q") {
        if (i === curI || j === curJ) {
          return false;
        }
        const n = dfsRes.length;
        // 设置i,j对角线不可放置
        let nextI = i;
        let nextJ = j;
        while (nextI >= 1 && nextJ >= 1 && nextI < n + 1 && nextJ < n + 1) {
          nextI = nextI - 1;
          nextJ = nextJ - 1;
          if (nextI === curI && nextJ === curJ) {
            return false;
          }
        }
        let nextI1 = i;
        let nextJ1 = j;
        while (nextI1 >= -1 && nextJ1 >= -1 && nextI1 < n - 1 && nextJ1 < n - 1) {
          nextI1 = nextI1 + 1;
          nextJ1 = nextJ1 + 1;
          if (nextI1 === curI && nextJ1 === curJ) {
            return false;
          }
        }

        let nextI2 = i;
        let nextJ2 = j;
        while (nextI2 >= -1 && nextJ2 >= 1 && nextI2 < n - 1 && nextJ2 < n + 1) {
          nextI2 = nextI2 + 1;
          nextJ2 = nextJ2 - 1;
          if (nextI2 === curI && nextJ2 === curJ) {
            return false;
          }
        }

        let nextI3 = i;
        let nextJ3 = j;
        while (nextI3 >= 1 && nextJ3 >= -1 && nextI3 < n + 1 && nextJ3 < n - 1) {
          nextI3 = nextI3 - 1;
          nextJ3 = nextJ3 + 1;
          if (nextI3 === curI && nextJ3 === curJ) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
const creatRes = (n) => {
  const dfsRes = [];
  for (let j = 0; j < n; j++) {
    dfsRes[j] = new Array(n).fill(".");
  }
  return dfsRes;
};
export default (n) => {
  let res = [];
  const visited = [];
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < n; i++) {
    const dfsRes = creatRes(n);
    if (canSet(dfsRes, 0, i)) {
      dfsRes[0][i] = "Q";
      dfs(dfsRes, 1, res);
      dfsRes[0][i] = ".";
    }
  }
  return res;
};


```


#### 实现2
```js
/**
 * @param {number} n
 * @return {string[][]}
 */
const valid = (chess, row, col) => {
  // 检查所有列
  for (let i = 0; i < row; i++) {
    if (chess[i][col] == "Q") {
      return false;
    }
  }
  // 检查45度角的
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] == "Q") {
      return false;
    }
  }
  // 检查135度角的
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == "Q") {
      return false;
    }
  }
  return true;
};
const solve = (res, chess, row) => {
  if (row === chess.length) {
    const temp = chess.map((item) => {
      return item.join("");
    });
    res.push(temp);
    return;
  }
  for (let col = 0; col < chess.length; col++) {
    if (valid(chess, row, col)) {
      chess[row][col] = "Q";
      solve(res, chess, row + 1);
      chess[row][col] = ".";
    }
  }
};
// Runtime: 80 ms, faster than 97.11% of JavaScript online submissions for N-Queens.
// Memory Usage: 40.8 MB, less than 76.53% of JavaScript online submissions for N-Queens.
// Next challenges:
export default (n) => {
  let res = [];
  // 定义棋盘
  const chess = [];
  for (let i = 0; i < n; i++) {
    chess[i] = new Array(n).fill(".");
  }
  solve(res, chess, 0);
  return res;
};

```