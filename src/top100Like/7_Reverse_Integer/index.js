/**
 * @param {number} x
 * @return {number}
 */

//  Runtime: 104 ms, faster than 34.57% of JavaScript online submissions for Reverse Integer.
//  Memory Usage: 40 MB, less than 91.02% of JavaScript online submissions for Reverse Integer.
export default (x) => {
  let result = 0;
  let flag = true;
  if (x < 0) {
    flag = false;
    x = -x;
  }
  while (x != 0) {
    let tail = x % 10;
    let newResult = result * 10 + tail;
    if (Math.floor((newResult - tail) / 10) != result) {
      return 0;
    }
    result = newResult;
    x = Math.floor(x / 10);
  }
  if (flag) {
    if (result > Math.pow(2, 31) - 1) {
      return 0;
    }
    return result;
  } else {
    if (-result < -Math.pow(2, 31)) {
      return 0;
    }
    return -result;
  }
};
