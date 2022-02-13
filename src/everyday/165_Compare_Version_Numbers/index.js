/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// Runtime: 66 ms, faster than 91.22% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 42.1 MB, less than 10.97% of JavaScript online submissions for Compare Version Numbers.
var compareVersion = function (version1, version2) {
  const version1Arr = version1.split(".");
  const version2Arr = version2.split(".");
  const len = Math.min(version2Arr.length, version1Arr.length);
  for (let i = 0; i < len; i++) {
    if (+version1Arr[i] > +version2Arr[i]) {
      return 1;
    } else if (+version1Arr[i] < +version2Arr[i]) {
      return -1;
    }
  }
  for (let i = len; i < version2Arr.length; i++) {
    if (+version2Arr[i] > 0) {
      return -1;
    }
  }
  for (let i = len; i < version1Arr.length; i++) {
    if (+version1Arr[i] > 0) {
      return 1;
    }
  }
  return 0;
};
