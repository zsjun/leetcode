/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist1 = (board, x, y, word, i) => {
  if (i === word.length) return true;
  if (y < 0 || x < 0 || x === board.length || y === board[x].length) return false;
  if (board[x][y] !== word[i]) return false;
  const temp = board[x][y];
  board[x][y] = 256;
  let exist =
    exist1(board, x + 1, y, word, i + 1) ||
    exist1(board, x - 1, y, word, i + 1) ||
    exist1(board, x, y + 1, word, i + 1) ||
    exist1(board, x, y - 1, word, i + 1);
  board[x][y] = temp;
  return exist;
};
// Runtime: 180 ms, faster than 65.35% of JavaScript online submissions for Word Search.
// Memory Usage: 38.3 MB, less than 99.44% of JavaScript online submissions for Word Search.
export default (board, word) => {
  const w = word.split("");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (exist1(board, i, j, w, 0)) return true;
    }
  }
  return false;
};
