/**
 * @param {character[][]} board
 * @return {boolean}
 */

const find = (board) => {
  const rowMap = new Map();
  const colMap = new Map();
  for (let i = 0; i < board.length; i++) {
    rowMap.clear();
    for (let j = 0; j < board.length; j++) {
      if (rowMap.has(board[i][j]) && board[i][j] !== ".") {
        return false;
      } else {
        rowMap.set(board[i][j], true);
      }
    }
    colMap.clear();
    for (let j = 0; j < board.length; j++) {
      if (colMap.has(board[j][i]) && board[j][i] !== ".") {
        return false;
      } else {
        colMap.set(board[j][i], true);
      }
    }
  }
  return true;
};
const findNum = (board, row, col) => {
  const colMap = new Map();
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      if (colMap.has(board[i][j]) && board[i][j] !== ".") {
        return false;
      } else {
        colMap.set(board[i][j], true);
      }
    }
  }
  return true;
};
export default (board) => {
  return (
    find(board, 0, 0) &&
    findNum(board, 0, 0) &&
    findNum(board, 3, 0) &&
    findNum(board, 6, 0) &&
    findNum(board, 0, 3) &&
    findNum(board, 0, 6) &&
    findNum(board, 3, 3) &&
    findNum(board, 3, 6) &&
    findNum(board, 6, 3) &&
    findNum(board, 6, 6)
  );
};
