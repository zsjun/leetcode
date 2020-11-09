/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export default (board) => {
  const live2die = 2;
  const die2live = 3;
  const m = board.length;
  const n = board[0].length;

  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let lives = 0;
      for (let k = 0; k < dirs.length; k++) {
        const x = i + dirs[k][0];
        const y = j + dirs[k][1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          if (board[x][y] === 1 || board[x][y] === 2) {
            lives++;
          }
        }
      }

      if (lives < 2 && board[i][j] === 1) {
        board[i][j] = 2;
      } else if ((lives === 2 || lives === 3) && board[i][j] === 1) {
        board[i][j] = 1;
      } else if (lives > 3 && board[i][j] === 1) {
        board[i][j] = 2;
      } else if (lives === 3 && board[i][j] === 0) {
        board[i][j] = 3;
      }
    }
  }
  // 解码
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
  return board;
};
