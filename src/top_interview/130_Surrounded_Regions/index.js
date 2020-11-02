/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const set1 = (visited, i, j, board) => {
  // if (i < 0 || i > board.length || j < 0 || j > board[0].length) {
  //   return;
  // }
  if (board[i][j] === "O") {
    visited[i][j] = 1;
  }
  for (let k = 0; k < dirs.length; k++) {
    const x = i + dirs[k][0];
    const y = j + dirs[k][1];
    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || visited[x][y] === 1) {
      continue;
    }
    if (board[x][y] === "O") {
      console.log(x, y, i, j);
      set1(visited, x, y, board);
    }
  }
};
export default (board) => {
  const visited = [];
  if (board.length === 0) return board;
  for (let i = 0; i < board.length; i++) {
    visited[i] = new Array(board[0].length).fill(0);
  }

  // 最顶层
  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] === "O") {
      set1(visited, 0, i, board);
    }
  }
  // 侧边
  for (let i = 1; i < board.length; i++) {
    if (board[i][0] === "O") {
      set1(visited, i, 0, board);
    }
  }
  // 右边
  for (let i = 1; i < board.length; i++) {
    if (board[i][board[0].length - 1] === "O") {
      set1(visited, i, board[0].length - 1, board);
    }
  }
  // 底
  for (let i = 1; i < board[0].length; i++) {
    if (board[board.length - 1][i] === "O") {
      set1(visited, board.length - 1, i, board);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (
        !(
          visited[i][j] === 1 &&
          board[i][j] === "O" &&
          (i !== 0 || i !== board.length - 1 || j !== 0 || j !== board[0].length - 1)
        )
      ) {
        board[i][j] = "X";
      }
    }
  }
  return board;
};
