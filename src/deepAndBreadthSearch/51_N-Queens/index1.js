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
