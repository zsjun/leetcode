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
const gfs = (board, i, j, m, n) => {
  board[i][j] = -1;
  for (let k = 0; k < 4; k++) {
    const nextI = i + dirs[k][0];
    const nextJ = j + dirs[k][1];
    if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && board[nextI][nextJ] === "O") {
      gfs(board, nextI, nextJ, m, n);
    }
  }
};
// Runtime: 96 ms, faster than 84.79% of JavaScript online submissions for Surrounded Regions.
// Memory Usage: 42.2 MB, less than 87.06% of JavaScript online submissions for Surrounded Regions.
export default (board) => {
  const m = board.length;

  if (m === 0) return board;
  const n = board[0].length;

  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") {
      gfs(board, 0, i, m, n);
    }
    if (board[m - 1][i] === "O") {
      gfs(board, m - 1, i, m, n);
    }
  }
  for (let i = 1; i < m - 1; i++) {
    if (board[i][0] === "O") {
      gfs(board, i, 0, m, n);
    }
    if (board[i][n - 1] === "O") {
      gfs(board, i, n - 1, m, n);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
  return board;
};
