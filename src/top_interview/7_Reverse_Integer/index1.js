/**
 * @param {number} x
 * @return {number}
 */
//  Runtime: 112 ms, faster than 22.14% of JavaScript online submissions for Reverse Integer.
//  Memory Usage: 40.9 MB, less than 8.06% of JavaScript online submissions for Reverse Integer.
// 1 Math.sign 可以获取x的标志位，也就是正负
// parseInt 转换string

export default (x) => {
  const reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};
