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
  for (let i = L; i <= R; i++) {
    const num = get1num(i);
    let sq = Math.sqrt(num);
    let flag = true;
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }

    if (flag && num > 1) {
      res++;
    }
  }
  return res;
};
