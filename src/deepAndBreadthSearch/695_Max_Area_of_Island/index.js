/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

export default (grid) => {
  const visited = [];
  const m = grid.length;
  const n = grid[0].length;
  let maxArea = 0;
  let x = 0;
  let y = 0;
  let cur_maxArea = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        cur_maxArea = 1;
        grid[i][j] = 0;
        const island = [];
        island.push([i, j]);
        while (island.length > 0) {
          const [curI, curJ] = island.pop();
          for (let k = 0; k < 4; k++) {
            x = curI + dirs[k][0];
            y = curJ + dirs[k][1];
            if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
              grid[x][y] = 0;
              cur_maxArea++;
              island.push([x, y]);
            }
          }
        }
        maxArea = Math.max(maxArea, cur_maxArea);
      }
    }
  }
  return maxArea;
};
