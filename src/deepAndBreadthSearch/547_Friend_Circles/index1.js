/**
 * @param {number[][]} M
 * @return {number}
 */

const dirs = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dfs = (M, curI, curJ) => {
  M[curI][curJ] = 0;
  for (let i = 0; i < M[0].length; i++) {
    const nextJ = i;
    const nextI = curI;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
  for (let i = 0; i < M.length; i++) {
    const nextI = i;
    const nextJ = curI;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }

  for (let i = 0; i < M.length; i++) {
    const nextI = curJ;
    const nextJ = i;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
  for (let i = 0; i < M.length; i++) {
    const nextI = i;
    const nextJ = curJ;
    if (nextI >= 0 && nextI < M.length && nextJ >= 0 && nextJ < M[0].length && M[nextI][nextJ] === 1) {
      dfs(M, nextI, nextJ);
    }
  }
};
// Runtime: 100 ms, faster than 19.75% of JavaScript online submissions for Friend Circles.
// Memory Usage: 42.9 MB, less than 13.59% of JavaScript online submissions for Friend Circles.
export default (M) => {
  if (M.length === 1) return 1;
  const m = M.length;
  const n = M[0].length;
  let res = 0;
  const circles = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    if (circles[i] === 0) {
      dfs(M, i, circles);
      res++;
    }
  }
  return res;
};
