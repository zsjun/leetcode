/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
export default (A, B, C, D) => {
  let len = A.length;
  let sum = 0;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum1 = A[i] + B[j];
      if (map.has(sum1)) {
        map.set(sum1, map.get(sum1) + 1);
      } else {
        map.set(sum1, 1);
      }
    }
  }
  console.log(map);
  for (let k = 0; k < len; k++) {
    for (let m = 0; m < len; m++) {
      let sum2 = C[k] + D[m];
      if (map.has(-sum2)) {
        sum += map.get(-sum2);
      }
    }
  }
  return sum;
};
