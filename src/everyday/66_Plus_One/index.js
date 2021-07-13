/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Runtime: 84 ms, faster than 24.99% of JavaScript online submissions for Plus One.
// Memory Usage: 38.3 MB, less than 93.90% of JavaScript online submissions for Plus One.
export default (digits) => {
  const len = digits.length;
  let flag = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] + flag >= 10) {
      flag = 1;
      digits[i] = digits[i] + 1 - 10;
    } else {
      digits[i] = digits[i] + flag;
      flag = 0;
    }
  }
  if (flag === 1) {
    digits.unshift("1");
  }
  return digits;
};
