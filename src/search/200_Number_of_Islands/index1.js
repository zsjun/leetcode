/**
 * @param {character[][]} grid
 * @return {number}
 */

const bfs = (mark, grid, x, y, qArr) => {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  if (grid[x][y] === "0") {
    return;
  }
  mark[x][y] = 1;
  qArr.push({
    x,
    y,
  });
  // 顺序是左 上 右 下
  for (let i = 0; i < 4; i++) {
    let newX = x + dx[i];
    let newY = y + dy[i];
    if (newX < 0 || newX >= mark.length || newY < 0 || newY >= mark[0].length) {
      continue;
    }
    if (mark[newX][newY] === 0 && grid[newX][newY] === "1") {
      bfs(mark, grid, newX, newY, qArr);
    }
  }
  qArr.pop();
};
export default (grid) => {
  let mark = [];
  for (let i = 0; i < grid.length; i++) {
    mark[i] = [];
    for (let j = 0; j < grid[0].length; j++) {
      mark[i][j] = 0;
    }
  }
  let count = 0;
  let qArr = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (mark[i][j] === 0 && grid[i][j] === "1" && qArr.length === 0) {
        bfs(mark, grid, i, j, qArr);
        count++;
      }
    }
  }
  return count;
};
