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
  const arr = [absDivisor];

  if (dividend === 0 || absDividend < absDivisor) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (absDivisor === 1) return divisor > 0 ? dividend : -dividend;

  while (arr[arr.length - 1] < absDividend) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 1]);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (absDividend >= arr[i]) {
      absDividend -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return sign ? res : -res;
};
