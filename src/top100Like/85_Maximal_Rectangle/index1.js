/**
 * @param {character[][]} matrix
 * @return {number}
 */
export default (matrix) => {
  const len = matrix.length;
  if (len === 0) {
    return 0;
  }
  const column = matrix[0].length;
  if (column === 1 && len === 1) {
    if (matrix[0][0] === "0") {
      return 0;
    }
    if (matrix[0][1] === "1") {
      return 1;
    }
  }
  const left = new Array(column).fill(0);
  const right = new Array(column).fill(column);
  const height = new Array(column).fill(0);
  let max = 0;

  for (let i = 0; i < len; i++) {
    let cur_left = 0;
    let cur_right = column;

    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === "1") {
        height[j]++;
      } else {
        height[j] = 0;
      }
    }
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === "1") {
        left[j] = Math.max(left[j], cur_left);
      } else {
        left[j] = 0;
        cur_left = j + 1;
      }
    }
    for (let j = column - 1; j >= 0; j--) {
      if (matrix[i][j] === "1") {
        right[j] = Math.min(right[j], cur_right);
      } else {
        cur_right = j;
        right[j] = column;
      }
    }

    for (let j = 0; j < column; j++) {
      max = Math.max(max, (right[j] - left[j]) * height[j]);
    }
  }

  return max;
};
