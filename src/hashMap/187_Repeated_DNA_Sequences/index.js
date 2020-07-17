/**
 * @param {string} s
 * @return {string[]}
 */

function sumHash(str) {
  let obj = { A: 1, C: 2, G: 3, T: 4 };
  return str.split("").reduce((a, b, index) => a + obj[b] * Math.pow(4, 10 - index), 0);
}
export default (s) => {
  const map = new Map();
  const set = new Set();

  for (let i = 0; i + 9 < s.length; i++) {
    const str = s.substr(i, 10);
    const hashStr = sumHash(str);
    if (!map.has(hashStr)) {
      map.set(hashStr, str);
    } else {
      set.add(str);
    }
  }
  return [...set];
};
