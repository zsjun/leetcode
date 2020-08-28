/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
export default (lo, hi, k) => {
  if (lo === hi) return lo;
  let res = [];
  for (let i = lo; i <= hi; i++) {
    let count = i;
    let number = 0;
    while (count !== 1) {
      if (count % 2 === 0) {
        count = count / 2;
      } else {
        count = 3 * count + 1;
      }
      number++;
    }
    res.push({
      label: i,
      number,
    });
  }
  res.sort((a, b) => a.number - b.number);
  return res[k - 1].label;
};
