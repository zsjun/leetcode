/*
 * @Description:
 * @Author: zsj
 * @Date: 2021-07-09 10:11:19
 * @LastEditTime: 2021-07-09 11:21:51
 * @LastEditors: zsj
 * @Usage:
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//  Runtime: 80 ms, faster than 91.70% of JavaScript online submissions for Multiply Strings.
//  Memory Usage: 41 MB, less than 60.94% of JavaScript online submissions for Multiply Strings.
export default (num1, num2) => {
  if (num2 === "0" || num1 === "0") return "0";
  // 进位标志数组
  const prod = new Array(num1.length + num2.length).fill(0);
  let currIdx = prod.length - 1;

  for (let i = num1.length - 1; i >= 0; i--) {
    let idx = currIdx;
    currIdx--;

    for (let j = num2.length - 1; j >= 0; j--) {
      const res = +num1[i] * +num2[j] + prod[idx];
      prod[idx] = res % 10;
      idx--;
      prod[idx] += Math.floor(res / 10);
    }
  }
  return prod.join("").replace(/^0+/, "");
};
