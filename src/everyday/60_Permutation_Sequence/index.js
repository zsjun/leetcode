/*
 * @Description:
 * @Author: zsj
 * @Date: 2021-07-08 17:07:13
 * @LastEditTime: 2021-07-08 19:12:39
 * @LastEditors: zsj
 * @Usage:
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//  Runtime: 76 ms, faster than 90.77% of JavaScript online submissions for Permutation Sequence.
//  Memory Usage: 39.9 MB, less than 62.31% of JavaScript online submissions for Permutation Sequence.
export default (n, k) => {
  const numbers = [];
  // 阶乘
  const factorial = new Array(n + 1).fill(0);
  let sb = "";

  let sum = 1;
  factorial[0] = 1;
  // 创建阶乘数组，也就是每个n可以有多少个表达式
  for (let i = 1; i <= n; i++) {
    sum *= i;
    factorial[i] = sum;
  }

  // 创建numbers
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  // numbers = [1, 2, 3, 4]， 9
  // factorial=[1,1,2,6,24]
  // n = 4, k = 9
  // 2314
  // 这里减一是为了防止刚好是n！，比如24
  k--;

  // 这里逻辑是最重要的,首先确定第一个字符，也就是是 x *（n-1）最接近k
  for (let i = 1; i <= n; i++) {
    let index = Math.floor(k / factorial[n - i]);
    sb += numbers[index];
    numbers.splice(index, 1);
    k -= index * factorial[n - i];
  }

  return sb;
};
