/**
 * @param {number[]} deliciousness
 * @return {number}
 */
// tle
export default (deliciousness) => {
  let sum = 0;
  const map = new Map();
  for (let i = 0; i < deliciousness.length; i++) {
    for (let j = i + 1; j < deliciousness.length; j++) {
      const temp = deliciousness[i] + deliciousness[j];
      if (map.has(temp)) {
        sum++;
        sum = sum % 1000000007;
      } else if (Number.isInteger(Math.log2(temp))) {
        map.set(temp, true);
        sum++;
        sum = sum % 1000000007;
      }
    }
  }
  return sum;
};
