/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const get1num = (n) => {
  let bits = 0;
  while (n !== 0) {
    n &= n - 1;
    bits++;
  }
  return bits;
};
export default (L, R) => {
  let res = 0;
  // 因为L, R will be integers L <= R in the range [1, 10^6] 所以最多有19个1，因为
  // Math.pow(2,20) = 1048576 超过了10^6，所以19个1完全就够用了

  const max = 0b10100010100010101100;
  for (let i = L; i <= R; i++) {
    const num = get1num(i);
    if (((max >> num) & 1) === 1) {
      res++;
    }
  }
  return res;
};
