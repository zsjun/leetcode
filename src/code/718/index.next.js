/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// A: [1, 2, 3, 2, 1, 9];
// B: [3, 2, 1, 4, 7];
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {int} i 从A数组的起始点
 * @param {int} j 从B数组的起始点
 * @param {int} len 验证的两个数组最大子数组的长度
 * @return {number}
 */
const getLen = (A, i, B, j, len) => {
  let count = 0;
  let max = 0;
  for (let k = 0; k < len; k++) {
    if (A[i + k] === B[j + k]) {
      count++;
    } else if (count > 0) {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return count > 0 ? Math.max(max, count) : max;
};
export default (A, B) => {
  return A.length < B.length ? findMax(A, B) : findMax(B, A);
};

// [0, 0, 0, 0, 1][(1, 0, 0, 0, 0)];
// [1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0]
// [1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0]
// 采用双窗口滑动
const findMax = (A, B) => {
  let lenA = A.length;
  let lenB = B.length;
  let max = 0;
  // 首先两个数组刚开始进行对比
  for (let i = 1; i <= lenA; i++) {
    max = Math.max(max, getLen(A, 0, B, lenB - i, i));
  }
  // 当走完一遍，也就是遍历完A数组的全部数据后，
  for (let j = lenB - lenA; j >= 0; j--) {
    max = Math.max(max, getLen(A, 0, B, j, lenA));
  }
  // 当走完之后，然后继续其他的
  for (let k = 1; k < lenA; k++) {
    max = Math.max(max, getLen(A, k, B, 0, lenA - k));
  }

  return max;
};
