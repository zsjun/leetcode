/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
[
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
[
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const testGrid = (board, i, j, m, n, setNum) => {
  let iRange = 0;
  let jRange = 0;
  for (let k = 0; k < 3; k++) {
    if (i >= 3 * k && i < 3 * (k + 1)) {
      iRange = k;
      break;
    }
  }
  for (let k = 0; k < 3; k++) {
    if (j >= 3 * k && j < 3 * (k + 1)) {
      jRange = j;
      break;
    }
  }
  for (let m = iRange * 3; m < (iRange + 1) * 3; m++) {
    for (let m1 = jRange * 3; m1 < (jRange + 1) * 3; m1++) {
      if (board[m][m1] === setNum) {
        return false;
      }
    }
  }
  return true;
};
const testColumn = (board, j, m, setNum) => {
  for (let k = 0; k < m; k++) {
    if (board[k][j] === setNum) {
      return false;
    }
  }
  return true;
};
const testRow = (board, i, n, setNum) => {
  for (let k = 0; k < n; k++) {
    if (board[i][k] === setNum) {
      return false;
    }
  }
  return true;
};
const suc = (board, m, n) => {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === ".") {
        return false;
      }
    }
  }
  return true;
};
const dfs = (board, i, j, m, n, visited) => {
  if (suc(board, m, n)) {
    console.log(112);
    return true;
  }
  if (board[i][j] !== ".") {
    for (let m1 = 0; m1 < 4; m1++) {
      const nextI = i + dirs[m1][0];
      const nextJ = j + dirs[m1][1];
      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && visited[nextI][nextJ] === 0) {
        visited[nextI][nextJ] = 1;
        if (dfs(board, nextI, nextJ, m, n, visited)) {
          return true;
        } else {
          visited[nextI][nextJ] = 0;
        }
      }
    }
  } else {
    for (let m2 = 1; m2 <= 9; m2++) {
      if (testRow(board, i, n, "" + m2) && testColumn(board, j, m, "" + m2) && testGrid(board, i, j, m, n, "" + m2)) {
        board[i][j] = "" + m2;
        visited[i][j] = 1;
        if (dfs(board, i, j, m, n, visited)) {
          console.log(223);
          return true;
        } else {
          visited[i][j] = 0;
        }
      }
    }
  }
};

export default (board) => {
  const m = board.length;
  const n = board[0].length;
  const visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
    // for (let j = 0; j < n; j++) {
    //   if (board[i][j] !== ".") {
    //     visited[i][j] = 1;
    //   }
    // }
  }
  dfs(board, 0, 0, m, n, visited);
  console.log(board);
  return board;
};
