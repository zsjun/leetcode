/**
 * @param {number[][]} grid
 * @return {number}
 */
export default (grid) => {
  let min = grid[0][0];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        grid[i][j] = Math.min(
          grid[i][j] + grid[i - 1][j],
          grid[i][j] + grid[i][j - 1]
        );
      } else if (i - 1 >= 0 && j - 1 < 0) {
        grid[i][j] += grid[i - 1][j];
      } else if (i <= 1 && j >= 1) {
        grid[i][j] += grid[i][j - 1];
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
