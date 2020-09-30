/**
 * @param {number[]} A
 * @return {number}
 */
// export default (A) => {
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < A.length; j++) {
//       for (let k = 0; k < A.length; k++) {
//         if ((A[i] & A[j] & A[k]) === 0) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

export default (A) => {
  let res;
  const n = 1 << 16;
  let dp = new Array(n).fill(0);
  // 暂时缓存A中两个数字&的结果
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      dp[A[i] & A[j]]++;
    }
  }
  // 如果两个数字&的结果是0，则肯定是有dp[0] * A.length个结果
  res = dp[0] * A.length;
  for (let i = 1; i < dp.length; i++) {
    // 如果dp[i] = 0,说明暂存的没有i
    if (dp[i] === 0) {
      continue;
    }
    for (let j = 0; j < A.length; j++) {
      if ((i & A[j]) === 0) {
        res += dp[i];
      }
    }
  }
  return res;
};
