/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate1 = (matrix, begin, end) => {
  const len = end - begin;
  if (begin >= end) {
    return;
  }
  let tempTop = [];
  for (let i = begin; i <= end; i++) {
    tempTop.push(matrix[begin][i]);
  }

  let tempRight = [];
  for (let i = begin; i <= end; i++) {
    tempRight.push(matrix[i][end]);
  }
  let tempBottom = [];
  for (let i = end; i >= begin; i--) {
    tempBottom.push(matrix[end][i]);
  }
  let tempLeft = [];
  for (let i = end; i >= begin; i--) {
    tempLeft.push(matrix[i][begin]);
  }
  // 替换最右边
  for (let i = begin; i <= end; i++) {
    matrix[i][end] = tempTop[i - begin];
  }
  // console.log(temp, matrix);
  for (let i = end; i >= begin; i--) {
    matrix[end][i] = tempRight[end - i];
  }
  for (let i = end; i >= begin; i--) {
    matrix[i][begin] = tempBottom[end - i];
  }
  for (let i = begin; i <= end; i++) {
    // console.log(tempLeft);
    matrix[begin][i] = tempLeft[i - begin];
  }

  rotate1(matrix, begin + 1, end - 1);
};
// Runtime: 76 ms, faster than 82.34% of JavaScript online submissions for Rotate Image.
// Memory Usage: 38.9 MB, less than 23.65% of JavaScript online submissions for Rotate Image.
const rotate = (matrix) => {
  const len = matrix.length;
  rotate1(matrix, 0, len - 1);
  // console.log(matrix);
  // return matrix;
};
export default rotate;
