/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
//  Runtime: 100 ms, faster than 55.56% of JavaScript online submissions for Champagne Tower.
//  Memory Usage: 45 MB, less than 44.44% of JavaScript online submissions for Champagne Tower.
export default (poured, query_row, query_glass) => {
  const res = [];
  for (let i = 0; i < 101; i++) {
    res[i] = new Array(101).fill(0);
  }
  res[0][0] = poured;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j <= i; j++) {
      if (res[i][j] >= 1) {
        res[i + 1][j] += (res[i][j] - 1) / 2;
        res[i + 1][j + 1] += (res[i][j] - 1) / 2;
        res[i][j] = 1;
      }
    }
  }
  return res[query_row][query_glass];
};
