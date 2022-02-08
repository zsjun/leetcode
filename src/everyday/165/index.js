/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const version1Arr = version1.split(".");
  const version2Arr = version2.split(".");
  for (let i = 0; i < version1Arr.length; i++) {
    let max1 = version1Arr[i];
    let max2 = version2Arr[i];
    for (let j = 0; j < version1Arr[i].length; j++) {
      if (version1Arr[i].charAt(j) !== "0") {
        max1 = version1Arr[i].substring(j);
        break;
      }
    }
    for (let j = 0; j < version2Arr[i].length; j++) {
      if (version2Arr[i].charAt(j) !== "0") {
        max2 = version2Arr[i].substring(j);
        break;
      }
    }
    if (+max1 > +max2) {
      return 1;
    } else if (+max1 < +max2) {
      return -1;
    }
  }
  if (version1Arr.length > version2Arr.length) {
    return 1;
  } else if (version1Arr.length < version2Arr.length) {
    return -1;
  }
  return 0;
};
