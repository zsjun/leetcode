const equalsArray = (arr1 = [], arr2 = []) => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (len1 !== len2) return false;
  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
// Runtime: 532 ms, faster than 14.29% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
// Memory Usage: 50.3 MB, less than 42.86% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
// 逆向思维，根据结果去逆推结果
export default (matrix) => {
  let ans = 0;
  let m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    let cnt = 0;
    const flip = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      flip[j] = 1 - matrix[i][j];
    }
    for (let k = i; k < m; k++) {
      if (equalsArray(matrix[k], matrix[i]) || equalsArray(matrix[k], flip))
        cnt++;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
};
