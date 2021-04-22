/**
 * @param {number} x
 * @return {number}
 */

//  Runtime: 104 ms, faster than 34.57% of JavaScript online submissions for Reverse Integer.
//  Memory Usage: 40 MB, less than 91.02% of JavaScript online submissions for Reverse Integer.
export default (x) => {
  // 转成字符串然后再转成数组
  const reversed = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x);
  return reversed <= 0x7fffffff && reversed >= -0x80000000 ? reversed : 0;
};
