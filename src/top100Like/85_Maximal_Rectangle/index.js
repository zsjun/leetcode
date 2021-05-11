/**
 * @param {character[][]} matrix
 * @return {number}
 */
// [
//   ["1", "0", "1", "0", "0"],
//   ["1", "0", "1", "1", "1"],
//   ["1", "1", "1", "1", "1"],
//   ["1", "0", "0", "1", "0"],
// ];

export default (matrix) => {
  // return max;
  if (matrix.length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  // 当前高度下最左侧的1的位置
  const left = new Array(n).fill(0);
  // 当前高度下最右侧的1的位置
  const right = new Array(n).fill(n);
  // 高度
  const height = new Array(n).fill(0);
  // int left[n], right[n], height[n];
  // fill_n(left,n,0); fill_n(right,n,n); fill_n(height,n,0);
  let maxA = 0;
  for (let i = 0; i < m; i++) {
    let cur_left = 0;
    let cur_right = n;
    for (let j = 0; j < n; j++) {
      // compute height (can do this from either side)
      if (matrix[i][j] == "1") height[j]++;
      else height[j] = 0;
    }
    for (let j = 0; j < n; j++) {
      // compute left (from left to right)
      if (matrix[i][j] == "1") {
        left[j] = Math.max(left[j], cur_left);
      } else {
        left[j] = 0;
        cur_left = j + 1;
      }
    }
    // compute right (from right to left)
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][j] == "1") right[j] = Math.min(right[j], cur_right);
      else {
        right[j] = n;
        cur_right = j;
      }
    }
    // compute the area of rectangle (can do this from either side)
    for (let j = 0; j < n; j++) maxA = Math.max(maxA, (right[j] - left[j]) * height[j]);
  }
  return maxA;
};
