/**
 * @param {number[][]} A
 * @return {number}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const dfs = (firstBounds, A, m, n, i, j) => {
  if (A[i][j] === 0) {
    firstBounds.push([i, j]);
    return;
  }
  A[i][j] = 2;
  for (let k = 0; k < 4; k++) {
    const nextI = i + dirs[k][0];
    const nextJ = j + dirs[k][1];
    if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && A[nextI][nextJ] != 2) {
      dfs(firstBounds, A, m, n, nextI, nextJ);
    }
  }
};

export default (A) => {
  const m = A.length;
  const n = A[0].length;

  let flipped = false;
  // 第一个岛屿的边界
  const firstBounds = [];
  for (let i = 0; i < m; i++) {
    if (flipped) {
      break;
    }
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 1) {
        dfs(firstBounds, A, m, n, i, j);
        flipped = true;
        break;
      }
    }
  }
  let x, y;
  let level = 0;
  while (firstBounds.length > 0) {
    level++;
    let n_firstBounds = firstBounds.length;
    while (n_firstBounds--) {
      const [r, c] = firstBounds[0];
      firstBounds.shift();
      for (let k = 0; k < 4; k++) {
        x = r + dirs[k][0];
        y = c + dirs[k][1];
        if (x >= 0 && y >= 0 && x < m && y < n) {
          if (A[x][y] === 2) {
            continue;
          }
          if (A[x][y] === 1) {
            console.log(level);
            return level;
          }
          firstBounds.push([x, y]);
          A[x][y] = 2;
        }
      }
    }
  }
  return 0;
};
