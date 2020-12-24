/**
 * @param {number} num
 * @return {string}
 */

// Runtime: 76 ms, faster than 90.91% of JavaScript online submissions for Base 7.
// Memory Usage: 39 MB, less than 13.29% of JavaScript online submissions for Base 7.
export default (num) => {
  if (num == 0) return "0";
  const is_negative = num < 0;
  if (is_negative) {
    num = -num;
  }
  let res = "";
  while (num > 0) {
    const a = Math.floor(num / 7);
    const b = num % 7;
    res = b + res;
    num = a;
  }
  return is_negative ? "-" + res : res;
};
