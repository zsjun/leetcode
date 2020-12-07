  /**
  * @param {character[][]} board
  * @param {string} word
  * @return {boolean}
  */
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const dfs = (board, m, n, i, j, res, word, visted) => {
    if (res.length === word.length) {
      if (res.join("") === word) {
        return true;
      } else {
        return false;
      }
    }
    for (let k = 0; k < 4; k++) {
      const nextI = i + dirs[k][0];
      const nextJ = j + dirs[k][1];
      if (
        nextI >= 0 &&
        nextI < m &&
        nextJ >= 0 &&
        nextJ < n &&
        word.charAt(res.length) === board[nextI][nextJ] &&
        visted[nextI][nextJ] === 0
      ) {
        res.push(board[nextI][nextJ]);
        visted[nextI][nextJ] = 1;
        if (dfs(board, m, n, nextI, nextJ, [...res], word, visted)) {
          return true;
        }
        res.pop();
        visted[nextI][nextJ] = 0;
      }
    }
    return false;
  };
  export default (board, word) => {
    const m = board.length;
    const n = board[0].length;
    const res = [];
    const visted = [];
    for (let i = 0; i < m; i++) {
      visted[i] = new Array(n).fill(0);
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === word.charAt(0)) {
          res.push(board[i][j]);
          visted[i][j] = 1;
          if (dfs(board, m, n, i, j, [...res], word, visted)) {
            return true;
          }
          res.pop();
          visted[i][j] = 0;
        }
      }
    }
    return false;
  };
