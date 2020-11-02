/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

export default (dividend, divisor) => {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  let sign = 1;
  if ((dividend < 0 && divisor > 0) || (divisor < 0 && dividend > 0)) {
    sign = -1;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = 0;
  let base = divisor;
  let count = 1;
  while (dividend >= divisor) {
    count = 1;
    base = divisor;
    while (base <= dividend >> 1) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }
  if (sign < 0) {
    return -result;
  }
  return result;
};
