/**
 * @param {number[][]} matrix
 * @return {number}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dfs = (matrix, i, j, m, n, cache) => {
  if (cache[i][j] !== 0) return cache[i][j];
  let max = 1;
  for (let k = 0; k < dirs.length; k++) {
    const x = i + dirs[k][0];
    const y = j + dirs[k][1];

    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) {
      continue;
    }
    const len = 1 + dfs(matrix, x, y, m, n, cache);
    max = Math.max(max, len);
  }
  cache[i][j] = max;
  return max;
};
const longestIncreasingPath = (matrix) => {
  if (matrix.length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const cache = [];
  for (let i = 0; i < m; i++) {
    cache[i] = new Array(n).fill(0);
  }

  let max = 1;
  // console.log(cache);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const len = dfs(matrix, i, j, m, n, cache);
      max = Math.max(max, len);
    }
  }
  console.log(cache);
  return max;
};

export default longestIncreasingPath;
