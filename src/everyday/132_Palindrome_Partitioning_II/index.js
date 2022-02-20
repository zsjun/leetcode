/**
 * @param {string}
 * @return {number}
 */
const ispalind = (s, start, end) => {
  if (start > end) {
    return false;
  }
  while (start <= end) {
    if (s.charAt(start) !== s.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var minCut = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; ) {
    let flag = true;
    // console.log(i)
    for (let j = s.length - 1; j >= i; ) {
      // console.log(i,j)
      if (ispalind(s, i, j)) {
        res++;
        i = j + 1;
        flag = false;
        break;
      } else {
        j--;
      }
    }
    if (flag) {
      i++;
    }
  }
  return res - 1;
};
