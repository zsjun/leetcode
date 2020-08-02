/**
 * @param {number} num
 * @return {number}
 */
export default (num) => {
  let k = num.toString(2).length;
  console.log(k);
  while (k >= 0) {
    num ^= 1;
    num >>= 1;
    k--;
  }
  return num;
};
