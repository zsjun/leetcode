const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 主函数
export default (grid) => {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  let max_area = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] == 1) {
        max_area = Math.max(max_area, dfs(grid, i, j));
      }
    }
  }
  return max_area;
};
// 辅函数
const dfs = (grid, curI, curJ) => {
  grid[curI][curJ] = 0;
  let nextI;
  let nextJ;
  let area = 1;
  for (let i = 0; i < 4; ++i) {
    nextI = curI + dirs[i][0];
    nextJ = curJ + dirs[i][1];
    if (nextI >= 0 && nextI < grid.length && nextJ >= 0 && nextJ < grid[0].length && grid[nextI][nextJ] === 1) {
      area += dfs(grid, nextI, nextJ);
    }
  }
  return area;
};
