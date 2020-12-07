### 79 单词搜索


#### 题目描述

给定一个字母矩阵，所有的字母都与上下左右四个方向上的字母相连。给定一个字符串，求 字符串能不能在字母矩阵中寻找到。<br/>

例子1 <br/>

input：word = "ABCCED",<br/>
board =
[
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
]<br/>
output：true<br/>



例子2 <br/>

input：word = "SEE",<br/>
board =
[
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
]<br/>
output：true<br/>


例子3 <br/>

input：word = "ABCB",<br/>
board =
[
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]
]<br/>
output：false<br/>


#### 思考1

题目本身比较简单，就是简单的通过回溯递归来解决<br/>

#### 实现1

```js
  /**
  * @param {character[][]} board
  * @param {string} word
  * @return {boolean}
  */
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const dfs = (board, m, n, i, j, res, word, visted) => {
    if (res.length === word.length) {
      if (res.join("") === word) {
        return true;
      } else {
        return false;
      }
    }
    for (let k = 0; k < 4; k++) {
      const nextI = i + dirs[k][0];
      const nextJ = j + dirs[k][1];
      if (
        nextI >= 0 &&
        nextI < m &&
        nextJ >= 0 &&
        nextJ < n &&
        word.charAt(res.length) === board[nextI][nextJ] &&
        visted[nextI][nextJ] === 0
      ) {
        res.push(board[nextI][nextJ]);
        visted[nextI][nextJ] = 1;
        if (dfs(board, m, n, nextI, nextJ, [...res], word, visted)) {
          return true;
        }
        res.pop();
        visted[nextI][nextJ] = 0;
      }
    }
    return false;
  };
  export default (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const res = [];
    const visted = [];
    for (let i = 0; i < m; i++) {
      visted[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === word.charAt(0)) {
          res.push(board[i][j]);
          visted[i][j] = 1;
          if (dfs(board, m, n, i, j, [...res], word, visted)) {
            return true;
          }
          res.pop();
          visted[i][j] = 0;
        }
      }
    }
    return false;
  };


```
