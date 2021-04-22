/**
 * @param {number} x
 * @return {number}
 */

// Runtime: 88 ms, faster than 94.77% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.2 MB, less than 57.01% of JavaScript online submissions for Reverse Integer.
export default (x) => {
  // 先把x转成字符串，然后再把字符串转成数字
  const sign = Math.sign(x);
  let res = Math.abs(x).toString().split("").reverse().join("");
  // 转成数字
  res = +res * sign;
  // console.log(res)
  // 处理边界条件
  if (res > 0x7fffffff || res < -0x80000000) {
    return 0;
  }
  return res;
};
