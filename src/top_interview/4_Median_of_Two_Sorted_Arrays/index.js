/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
export default (A, B) => {
  let m = A.length;
  let n = B.length;

  // 保持m是最小的, 交换两个数组
  if (m > n) {
    const temp1 = m;
    m = n;
    n = temp1;

    const temp = A;
    A = B;
    B = temp;
  }
  // if (n === 0) {
  //   return false;
  // }
  let imin = 0;
  let imax = m;
  let halfLen = Math.floor((m + n + 1) / 2);
  // console.log(2332, halfLen);
  let max_of_left = 0;
  let min_of_right = 0;
  while (imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = halfLen - i;

    if (i < m && j >= 1 && B[j - 1] > A[i]) {
      imin = i + 1;
    } else if (i >= 1 && A[i - 1] > B[j]) {
      imax = i - 1;
    } else {
      if (i === 0 && j >= 1) {
        max_of_left = B[j - 1];
      } else if (j === 0 && i >= 1) {
        max_of_left = A[i - 1];
      } else {
        max_of_left = Math.max(A[i - 1], B[j - 1]);
      }
      if ((m + n) % 2 !== 0) {
        return max_of_left;
      }

      if (i === m && j < n) {
        min_of_right = B[j];
      } else if (j === n && i < m) {
        min_of_right = A[i];
      } else {
        min_of_right = Math.min(A[i], B[j]);
      }
      return (max_of_left + min_of_right) / 2;
    }
  }
};
