/**
 * @param {number} num
 * @return {number[]}
 */
// const get1num = (n) => {
//   let ret = 0;
//   while (n > 0) {
//     ret += n & 1;
//     n >>= 1;
//   }
//   return ret;
// };
// 根据 get1num(n & n-1) + 1 = get1num(n) => res[n & n-1] + 1 = res[n]
export default (num) => {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  let res = [0, 1];
  for (let i = 2; i <= num; i++) {
    res.push(res[i & (i - 1)] + 1);
  }
  return res;
};
