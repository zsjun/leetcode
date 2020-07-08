/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const search = (board, i, j, word, map, len) => {
  map.push(`${i}${j}`);
  if (word.length === 1) {
    const flag = board[i][j] === word;
    return flag;
  }
  // 处理特殊情况
  const rowLen = board.length;
  const columnLen = board[0].length;
  if (i < 0 || i >= rowLen || j < 0 || j >= columnLen) return false;
  let leftFlag = false;
  let rightFlag = false;
  let topFlag = false;
  let bottomFlag = false;
  let clearLeft = false;
  let clearRight = false;
  let clearTop = false;
  let clearBottom = false;
  if (i < rowLen && j - 1 >= 0 && word.length > 1 && !map.includes(`${i}${j - 1}`)) {
    if (board[i][j - 1] && board[i][j - 1] === word[1]) {
      const tmp = word;
      leftFlag = search(board, i, j - 1, tmp.substr(1), map);
    } else {
      clearLeft = true;
    }
  } else {
    clearLeft = true;
  }
  if (i < rowLen && j + 1 < columnLen && word.length > 1 && !map.includes(`${i}${j + 1}`)) {
    if (board[i][j + 1] && board[i][j + 1] === word[1]) {
      const tmp = word;
      rightFlag = search(board, i, j + 1, tmp.substr(1), map, len);
    }
  }
  if (i + 1 < rowLen && j < columnLen && word.length > 1 && !map.includes(`${i + 1}${j}`)) {
    if (board[i + 1][j] && board[i + 1][j] === word[1]) {
      const tmp = word;
      topFlag = search(board, i + 1, j, tmp.substr(1), map, len);
    }
  }
  if (i - 1 >= 0 && j < columnLen && word.length > 1 && !map.includes(`${i - 1}${j}`)) {
    if (board[i - 1][j] && board[i - 1][j] === word[1]) {
      const tmp = word;
      bottomFlag = search(board, i - 1, j, tmp.substr(1), map);
    }
  }
  if (!(leftFlag || rightFlag || bottomFlag || topFlag)) {
    map.pop();
  }
  return leftFlag || rightFlag || bottomFlag || topFlag;
};
export default (board, word) => {
  // 处理特殊情况
  const columnLen = board.length;
  const rowLen = board[0].length;
  if (columnLen * rowLen < word.length) {
    return false;
  }
  let map = [];
  let tmp = word;
  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      word = tmp;
      if (board[i][j] === word[0]) {
        map = [];
        if (search(board, i, j, word, map, word.length)) {
          return true;
        }
      }
    }
  }
  return false;
};
