/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len = s1.length;
  s1 = s1.split("").sort().join("");
  for (let i = 0; i < s2.length; i++) {
    const newStr = s2
      .substring(i, i + len)
      .split("")
      .sort()
      .join("");
    // console.log(newStr, s1)
    if (newStr === s1) {
      return true;
    }
  }
  return false;
};
