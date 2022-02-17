/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len = s1.length;
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const index = s1.charCodeAt(i) - "a".charCodeAt(0);
    arr[index]++;
  }
  // console.log(arr)
  for (let i = 0; i <= s2.length - len; i++) {
    const newStr = s2.substring(i, i + len);
    const newArr = new Array(26).fill(0);
    for (let j = 0; j < newStr.length; j++) {
      const index = newStr.charCodeAt(j) - "a".charCodeAt(0);
      newArr[index]++;
    }
    let flag = true;
    // console.log(11,newArr)
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] !== arr[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return true;
  }
  return false;
};
