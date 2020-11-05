/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
export default (matrix, k) => {
  const n = matrix.length;
  if (n * n === k) {
    return matrix[n - 1][n - 1];
  }
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1] + 1; // [low, high)
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    let count = 0;
    let j = n - 1;
    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i][j] > mid) {
        j--;
      }
      count += j + 1;
    }
    if (count < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
