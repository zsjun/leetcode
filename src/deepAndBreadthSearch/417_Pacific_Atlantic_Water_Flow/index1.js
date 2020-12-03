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
  const canReachPacific = new Array(m);
  const canReachAtlantic = new Array(m);
  for(let i =0; i<)

  let res = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      let hadEnd = [false, false];
      dfs(matrix, i, j, hadEnd);
      console.log(hadEnd);
      if (hadEnd[0] && hadEnd[1]) {
        res.push([i, j]);
      }
    }
  }
  console.log(res);
  return res;
};
// 辅函数
const dfs = (matrix, curI, curJ, hadEnd) => {
  let nextI;
  let nextJ;
  for (let i = 0; i < 4; ++i) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < matrix.length && nextJ >= 0 && nextJ < matrix[0].length) {
      if (matrix[nextI][nextJ] <= matrix[curI][curJ] && matrix[nextI][nextJ] !== -100) {
        dfs(matrix, nextI, nextJ, hadEnd);
      }
    }
  }
  matrix[curI][curJ] = temp;
};
