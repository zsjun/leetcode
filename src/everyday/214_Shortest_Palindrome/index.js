/**
 * @param {string} s
 * @return {string}
 */
const ispalind = (s, start, end) => {
  if (start >= end) {
    return false;
  }
  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
var shortestPalindrome = function (s) {
  let res = s.substring(1).split("").reverse().join("") + s;
  // console.log(res)
  const len = s.length;
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (ispalind(s, j, i)) {
        if (i - j + 1 === len) return s;
        // console.log(j,i)
        if (i - j + 1 + (len - i + j - 1) * 2 < res.length && i !== len - 1) {
          // console.log(j,i)
          res =
            s
              .substring(i + 1)
              .split("")
              .reverse()
              .join("") + s;
        }
      }
    }
  }
  return res;
};
