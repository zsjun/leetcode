const isValid = (board, i, j, setChar) => {
  // 每列不能有重复的元素
  for (let m1 = 0; m1 < 9; m1++) {
    if (board[m1][j] === setChar) {
      return false;
    }
  }
  // 每行不能有重复的元素
  for (let m2 = 0; m2 < 9; m2++) {
    if (board[i][m2] === setChar) {
      return false;
    }
  }
  // 确定每个粗线格子是否存在同样的
  let row = i - (i % 3);
  let col = j - (j % 3);
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (board[x + row][y + col] === setChar) {
        return false;
      }
    }
  }
  return true;
};
// 深层遍历，先行后列
const dfs = (board, i, j) => {
  // 如果全部遍历完了，返回true
  if (i === 9) {
    return true;
  }
  // 一行遍历完了，继续下一行
  if (j >= 9) {
    return dfs(board, i + 1, 0);
  }
  // 如果是数字，到下一个
  if (board[i][j] !== ".") {
    return dfs(board, i, j + 1);
  }
  for (let m1 = 1; m1 <= 9; m1++) {
    const temp = "" + m1;
    if (!isValid(board, i, j, temp)) {
      continue;
    }
    board[i][j] = temp;
    if (dfs(board, i, j + 1)) {
      return true;
    }
    board[i][j] = ".";
  }
  return false;
};
// Runtime: 116 ms, faster than 69.58% of JavaScript online submissions for Sudoku Solver.
// Memory Usage: 38.9 MB, less than 96.44% of JavaScript online submissions for Sudoku Solver.
export default (board) => {
  dfs(board, 0, 0);
  return board;
};
