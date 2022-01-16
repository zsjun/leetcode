/**
 * @param {character[][]} grid
 * @return {number}
 */

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// Runtime: 161 ms, faster than 20.54% of JavaScript online submissions for Number of Islands.
// Memory Usage: 46.7 MB, less than 29.44% of JavaScript online submissions for Number of Islands.
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
  }
  function travel(grid, visited, i, j) {
    visited[i][j] = 1;
    const travelList = [[i, j]];
    while (travelList.length > 0) {
      const now = travelList[0];
      travelList.shift();
      for (let i = 0; i < dirs.length; i++) {
        const newI = now[0] + dirs[i][0];
        const newJ = now[1] + dirs[i][1];
        if (
          newI >= 0 &&
          newI < m &&
          newJ >= 0 &&
          newJ < n &&
          grid[newI][newJ] === "1" &&
          visited[newI][newJ] === 0
        ) {
          visited[newI][newJ] = 1;
          travelList.push([newI, newJ]);
        }
      }
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0 && grid[i][j] === "1") {
        travel(grid, visited, i, j);
        res++;
      }
    }
  }
  return res;
};
