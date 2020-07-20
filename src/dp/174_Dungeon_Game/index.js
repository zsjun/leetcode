/**
 * @param {number[][]} dungeon
 * @return {number}
 */
export default (dungeon) => {
  const rowLen = dungeon.length;
  const colLen = dungeon[0].length;
  const res = [];

  // if (rowLen === 1) {
  //   return Math.abs()
  // }
  for (let i = 0; i < rowLen; i++) {
    res[i] = [];
  }

  res[rowLen - 1][colLen - 1] = 1;

  for (let i = rowLen - 1; i >= 0; i--) {
    for (let j = colLen - 1; j >= 0; j--) {
      if (i === rowLen - 1 && j === colLen - 1) {
        continue;
      }
      if (j < colLen - 1 && i < rowLen - 1) {
        res[i][j] = Math.min(
          res[i + 1][j] - dungeon[i + 1][j] > 0 ? Math.abs(res[i + 1][j] - dungeon[i + 1][j]) : 1,
          res[i][j + 1] - dungeon[i][j + 1] > 0 ? Math.abs(res[i][j + 1] - dungeon[i][j + 1]) : 1
        );
      } else if (j === colLen - 1) {
        res[i][j] = res[i + 1][j] - dungeon[i + 1][j] > 0 ? Math.abs(res[i + 1][j] - dungeon[i + 1][j]) : 1;
      } else if (i === rowLen - 1) {
        res[i][j] = res[i][j + 1] - dungeon[i][j + 1] > 0 ? Math.abs(res[i][j + 1] - dungeon[i][j + 1]) : 1;
      }
    }
  }

  if (rowLen === 1 && dungeon[0][0] > 0) {
    if (res[0][0] > dungeon[0][0]) {
      return res[0][0] - dungeon[0][0];
    } else if (res[0][0] === dungeon[0][0]) {
      return 1;
    } else {
      return res[0][0];
    }
  }

  return Math.abs(res[0][0] - dungeon[0][0]);
};
