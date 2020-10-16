/**
 * @param {number[][]} points
 * @return {number}
 */

const getK = (arr1, arr2) => {
  if (Math.abs(arr1[0] - arr2[0]) !== 0) {
    return (arr1[1] - arr2[1]) / (arr1[0] - arr2[0]);
  } else {
    return 0;
  }
};
const getB = (arr1, arr2) => {
  const k = getK(arr1, arr2);
  return arr1[1] - k * arr1[0];
};
export default (points) => {
  let max = 0;
  if (!points || points.length === 0) return 0;
  if (points.length === 1) return 1;
  if (points.length === 2) return 2;
  let dp = [];
  dp[0] = {
    k: points[0][0] !== 0 ? points[0][1] / points[0][0] : 0,
    b: points[0][0] !== 0 ? 0 : points[0][1],
  };
  dp[1] = {
    k: getK(points[0], points[1]),
    b: getB(points[0], points[1]),
  };
  for (let i = 2; i < points.length; i++) {
    let max1 = 0;
    // console.log(i);
    for (let j = i - 1; j >= 0; j--) {
      // console.log(i);
      const k = getK(points[i], points[j]);
      const b = getB(points[i], points[j]);
      max1 = 2;
      // console.log(i, j);
      // console.log(k, b);
      for (let k1 = 0; k1 < i; k1++) {
        if (k1 === j) {
          continue;
        }
        // console.log(Math.abs(points[k1][0] * k + b - points[k1][1]));
        if (Math.abs(points[k1][0] * k + b - points[k1][1]) < 0.001) {
          max1++;
          if (points[k1][0] === points[k1][1] && points[k1][0] === 0 && b !== 0) {
            max1--;
          }
        } else if (k === 0 && points[k1][0] === points[i][0]) {
          max1++;
        }

        if (max1 > max) {
          max = max1;
          dp[i] = {
            k,
            b,
          };
        }
      }
    }
  }
  return max;
};
