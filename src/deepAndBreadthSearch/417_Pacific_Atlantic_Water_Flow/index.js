/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 主函数
export default (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const m = matrix.length;
  const n = matrix[0].length;
  const canReachPacific = [];
  const canReachAtlantic = [];
  for (let i = 0; i < m; i++) {
    canReachPacific[i] = new Array(n).fill(0);
    canReachAtlantic[i] = new Array(n).fill(0);
  }
  let res = [];
  for (let i = 0; i < m; i++) {
    dfs(matrix, i, 0, canReachPacific);
  }
  for (let i = 0; i < n; i++) {
    dfs(matrix, 0, i, canReachPacific);
  }
  for (let i = 0; i < m; i++) {
    dfs(matrix, i, n - 1, canReachAtlantic);
  }
  for (let i = 0; i < n; i++) {
    dfs(matrix, m - 1, i, canReachAtlantic);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canReachPacific[i][j] === 1 && canReachAtlantic[i][j] === 1) {
        res.push([i, j]);
      }
    }
  }
  console.log(res);
  return res;
};
// 辅函数
const dfs = (matrix, curI, curJ, reach) => {
  let nextI;
  let nextJ;
  if (reach[curI][curJ]) {
    return;
  }
  reach[curI][curJ] = 1;
  for (let i = 0; i < 4; i++) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length) {
      if (matrix[nextI][nextJ] <= matrix[curI][curJ] && reach[nextI][nextJ] === 0) {
        dfs(matrix, nextI, nextJ, reach);
      }
    }
  }
};
