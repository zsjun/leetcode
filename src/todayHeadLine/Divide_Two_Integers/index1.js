/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
export default (dividend, divisor) => {
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  const sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
  let res = 0;

  if (dividend === 0 || absDividend < absDivisor) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (absDivisor === 1) return divisor > 0 ? dividend : -dividend;

  while (absDividend >= absDivisor) {
    let t = absDivisor << 1;
    let p = 1;
    while (absDividend >= t) {
      t = t << 1;
      p = p << 1;
    }
    absDividend -= t;
    res += p;
  }
  return sign ? res : -res;
};
