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
  for (let i = 2; i < points.length; i++) {
    let max1 = 0;
    for (let j = i - 1; j >= 0; j--) {
      const k = getK(points[i], points[j]);
      max1 = 2;
      for (let k1 = 0; k1 < i; k1++) {
        if (k1 === j) {
          continue;
        }
        if (k === getK(points[i], points[k1]) || qualArr(points[k1], points[i]) || qualArr(points[k1], points[j])) {
          max1++;
        }

        if (max1 > max) {
          max = max1;
        }
      }
    }
  }
  return max;
};
