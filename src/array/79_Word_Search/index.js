/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const search = (board, i, j, word, map) => {
  map.set(`${i}${j}`, true);
  if (word.length === 1) {
    const flag = board[i][j] === word;
    map.clear();
    return flag;
  }

  console.log(word);
  console.log(map);
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
  if (i < rowLen && j - 1 >= 0 && word.length > 1 && !map.get(`${i}${j - 1}`)) {
    if (board[i][j - 1] && board[i][j - 1] === word[1]) {
      const tmp = word;
      leftFlag = search(board, i, j - 1, tmp.substr(1), map);
    } else {
      clearLeft = true;
    }
  } else {
    clearLeft = true;
  }

  if (i < rowLen && j + 1 < columnLen && word.length > 1 && !map.get(`${i}${j + 1}`)) {
    if (board[i][j + 1] && board[i][j + 1] === word[1]) {
      const tmp = word;
      rightFlag = search(board, i, j + 1, tmp.substr(1), map);
    } else {
      clearRight = true;
    }
  } else {
    clearRight = true;
  }
  if (i + 1 < rowLen && j < columnLen && word.length > 1 && !map.get(`${i + 1}${j}`)) {
    if (board[i + 1][j] && board[i + 1][j] === word[1]) {
      const tmp = word;
      topFlag = search(board, i + 1, j, tmp.substr(1), map);
    } else {
      clearTop = true;
    }
  } else {
    clearTop = true;
  }
  console.log("sds", i);
  console.log("sds", j);
  if (i - 1 >= 0 && j < columnLen && word.length > 1 && !map.get(`${i - 1}${j}`)) {
    if (board[i - 1][j] && board[i - 1][j] === word[1]) {
      bottomFlag = search(board, i - 1, j, tmp.substr(1), map);
    } else {
      clearBottom = true;
    }
  } else {
    clearBottom = true;
  }
  if (clearBottom && clearLeft && clearRight && clearTop) {
    map.clear();
  }

  return leftFlag || rightFlag || topFlag || bottomFlag;
};
export default (board, word) => {
  // 处理特殊情况
  const columnLen = board.length;
  const rowLen = board[0].length;
  if (columnLen * rowLen < word.length) {
    return false;
  }
  const map = new Map();
  let tmp = word;
  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      word = tmp;
      console.log("dss", j);
      if (board[i][j] === word[0]) {
        if (search(board, i, j, word, map)) {
          return true;
        }
      }
    }
  }
  return false;
};
