/**
 * @param {number} num
 * @return {string[]}
 */
const get1num = (n) => {
  let bits = 0;
  while (n !== 0) {
    if ((n & 1) !== 0) {
      bits++;
    }
    n >>= 1;
  }
  return bits;
};
export default (num) => {
  let res = [];
  if (num > 9) return ["11: 59"];
  if (num <= 0) return ["0:00"];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (get1num(i) + get1num(j) === num) {
        if (j.toString().length !== 2) {
          j = "0" + j;
        }
        res.push(i + ":" + j);
      }
    }
  }
  return res;
};
