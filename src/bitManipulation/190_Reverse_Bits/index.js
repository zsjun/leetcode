/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export default (n) => {
  let temp = 1;
  let res = 0;
  for (let i = 31; i >= 0; i--) {
    temp <<= i;
    if (temp < 0) temp = -temp;
    res += temp * (n & 1);
    temp = 1;
    n >>= 1;
  }
  return res;
};
