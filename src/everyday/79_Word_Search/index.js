/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// board 待搜索的二维数组, x,y 起始地址，word，i是word的索引
const exist1 = (board, x, y, word, i) => {
  if (i === word.length) {
    return true;
  }
  if (y < 0 || x < 0 || x === board.length || y === board[x].length) {
    return false;
  }

  if (board[x][y] !== word.charAt(i)) {
    return false;
  }

  const tempVal = board[x][y];
  board[x][y] = 256;
  let exist =
    exist1(board, x + 1, y, word, i + 1) ||
    exist1(board, x - 1, y, word, i + 1) ||
    exist1(board, x, y + 1, word, i + 1) ||
    exist1(board, x, y - 1, word, i + 1);
  board[x][y] = tempVal;
  return exist;
};

var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (exist1(board, i, j, word, 0)) return true;
    }
  }
  return false;
};
