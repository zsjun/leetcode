/**
 * @param {character[][]} matrix
 * @return {number}
 */

export default (matrix) => {
  if (matrix.length === 0) return 0;
  if (matrix.length === 1 && matrix[0].length === 1) return matrix[0][0];
  let height = new Array(matrix[0].length);
  let left = new Array(matrix[0].length);
  let right = new Array(matrix[0].length);
  let max = 0;
  height.fill(0);
  left.fill(0);
  right.fill(matrix[0].length);

  for (let i = 0; i < matrix.length; i++) {
    let cur_left = 0;
    let cur_right = matrix[i].length;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "1") {
        height[j] = height[j] + 1;
        left[j] = Math.max(left[j], cur_left);
      } else {
        left[j] = 0;
        cur_left = j + 1;
        height[j] = 0;
      }
    }
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === "1") {
        right[j] = Math.min(right[j], cur_right);
      } else {
        right[j] = matrix[i].length;
        cur_right = j;
      }
    }
    for (let j = 0; j < matrix[i].length; j++) {
      if ((right[j] - left[j]) * height[j] > max) {
        max = (right[j] - left[j]) * height[j];
      }
    }
  }
  return max;
};
