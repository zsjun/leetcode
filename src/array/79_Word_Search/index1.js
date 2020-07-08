/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const search = (board, i, j, word, wordPosition) => {
  if (wordPosition === word.length) return true;
  if (i < 0 || j < 0 || i >= board.length || j >= board[i].lenght) return false;
  if (board[i][j] != word[wordPosition]) return false;
  let isExist = false;
  board[i][j] = -1;
  // 获取一个不是字母的数字，表示在本次遍历中已经遍历过了，不能重复
  isExist =
    search(board, i, j + 1, word, wordPosition + 1) ||
    search(board, i + 1, j, word, wordPosition + 1) ||
    search(board, i - 1, j, word, wordPosition + 1) ||
    search(board, i, j - 1, word, wordPosition + 1);
  // // 遍历结束，复原
  board[i][j] = word[wordPosition];
  return isExist;
};
export default (board, word) => {
  // 处理特殊情况
  const columnLen = board.length;
  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (search(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};
