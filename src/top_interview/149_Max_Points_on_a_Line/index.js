/**
 * @param {number[][]} points
 * @return {number}
 */

const getK = (arr1, arr2) => {
  if (Math.abs(arr1[0] - arr2[0]) !== 0) {
    return (arr1[1] - arr2[1]) / (arr1[0] - arr2[0]);
  } else {
    // 当是一条垂直线的时候
    return "cur";
  }
};
// const getB = (arr1, arr2) => {
//   const k = getK(arr1, arr2);
//   return arr1[1] - k * arr1[0];
// };
const qualArr = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
export default (points) => {
  let max = 0;
  if (!points || points.length === 0) return 0;
  if (points.length === 1) return 1;
  if (points.length === 2) return 2;
  // let dp = [];
  // dp[0] = points[0][0] !== 0 ? points[0][1] / points[0][0] : 0;
  // dp[1] = getK(points[0], points[1]);
  for (let i = 2; i < points.length; i++) {
    let max1 = 0;
    // console.log(i);
    for (let j = i - 1; j >= 0; j--) {
      // console.log(i);
      const k = getK(points[i], points[j]);
      max1 = 2;
      // console.log(i, j);
      // console.log(k, b);
      // console.log(i, j, k);
      for (let k1 = 0; k1 < i; k1++) {
        if (k1 === j) {
          continue;
        }
        // console.log(k);
        // console.log(getK(points[i], points[k1]), getK(points[j], points[k1]));
        // console.log(Math.abs(points[k1][0] * k + b - points[k1][1]));
        if (k === getK(points[i], points[k1]) || qualArr(points[k1], points[i]) || qualArr(points[k1], points[j])) {
          max1++;
        }

        if (max1 > max) {
          max = max1;
          // dp[i] = k;
        }
      }
    }
  }
  return max;
};
