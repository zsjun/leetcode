/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
// test1111
export default (startValue, target) => {
  let res = 0;
  while (target > startValue) {
    target = target % 2 > 0 ? target + 1 : target / 2;
    res++;
  }
  return res + startValue - target;
};
