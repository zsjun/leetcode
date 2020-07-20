/**
 * @param {number[][]} grid
 * @return {number}
 */
export default (grid) => {
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let res = new Array(rowLen); //表格有10行
  for (let i = 0; i < rowLen; i++) {
    res[i] = new Array(colLen); //每行有10列
  }
  res[rowLen - 1][colLen - 1] = 1;
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        grid[i - 1][j - 1] = Math.min(
          Math.abs(res[i][j - 1] - grid[i][j - 1]),
          Math.abs(res[i - 1][j] - grid[i - 1][j])
        );
      } else if (i - 1 >= 0 && j - 1 < 0) {
        if (grid[i][j] <= res[i][j]) {
          res[i - 1][j] = res[i][j] - grid[i][j];
        } else {
          res[i - 1][j] = grid[i][j] - res[i][j];
        }
      } else if (i <= 1 && j >= 1) {
        if (grid[i][j] <= res[i][j]) {
          res[i][j - 1] = res[i][j] - grid[i][j];
        } else {
          res[i][j - 1] = grid[i][j] - res[i][j];
        }
      }
    }
  }
  console.log(grid);
  return Math.abs(res[0][0] - grid[0][0]);
};
