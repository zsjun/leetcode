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
// 辅函数
const dfs = (matrix, curI, curJ, visited, hadEnd) => {
  if (curI === 0 || curJ === 0) {
    hadEnd[0] = true;
  }
  if (curI === matrix.length - 1 || curJ === matrix[0].length - 1) {
    hadEnd[1] = true;
  }
  let nextI;
  let nextJ;
  visited[curI][curJ] = 1;
  for (let i = 0; i < 4; ++i) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length) {
      if (matrix[nextI][nextJ] <= matrix[curI][curJ] && visited[nextI][nextJ] === 0) {
        dfs(matrix, nextI, nextJ, visited, hadEnd);
      }
    }
  }
  visited[curI][curJ] = 0;
};
// 主函数
export default (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  const visited = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
  }

  let res = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // hadEnd[0] 表示到达Pacti，hadEnd[0] 表示到达Anti
      let hadEnd = [false, false];
      dfs(matrix, i, j, visited, hadEnd);
      // 如果都到达，则加入
      if (hadEnd[0] && hadEnd[1]) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
