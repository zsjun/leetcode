/**
 * @param {number[]} T
 * @return {number[]}
 */

// Runtime: 944 ms, faster than 34.76% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 49.7 MB, less than 46.98% of JavaScript online submissions for Daily Temperatures.
export default (T) => {
  const res = [];
  for (let i = 0; i < T.length; i++) {
    let current = T[i];
    res[i] = 0;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > current) {
        res[i] = j - i;
        break;
      }
    }
  }
  return res;
};
