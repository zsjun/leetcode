/**
 * @param {number} x
 * @return {number}
 */
// 123
// Runtime: 129 ms, faster than 22.18% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.1 MB, less than 91.16% of JavaScript online submissions for Reverse Integer.
var reverse = function (x) {
  let result = 0;

  const sign = Math.sign(x);
  x = Math.abs(x);

  while (x !== 0) {
    const tail = x % 10;
    const newResult = result * 10 + tail;
    result = newResult;
    x = Math.floor(x / 10);
  }
  result = result * sign;
  if (result > 0x7fffffff || result < -0x80000000) {
    return 0;
  }
  return result;
};
