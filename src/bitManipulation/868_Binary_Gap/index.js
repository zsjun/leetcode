/**
 * @param {number} N
 * @return {number}
 */
export default (N) => {
  let res = 0;
  let pre = -1;
  for (let i = 0; i < 32; i++) {
    if (((N >> i) & 1) === 1) {
      if (pre !== -1) {
        res = Math.max(res, i - pre);
      }
      pre = i;
    }
  }
  return res;
};
