/**
 * @param {number} num
 * @return {number}
 */
export default (num) => {
  let k = num.toString(2).length;
  const m = Math.pow(2, k) - 1;
  return num ^ m;
};
