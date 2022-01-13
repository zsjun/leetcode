/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  // Math.sign(x) 获取X的标识符
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
