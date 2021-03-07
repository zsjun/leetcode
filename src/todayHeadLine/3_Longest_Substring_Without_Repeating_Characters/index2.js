/**
 * @param {string} s
 * @return {number}
 */
// abba
export default (s) => {
  if (s.length === 0) return "";
  const map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; ++i) {
    if (map.has(s.charAt(i))) {
      j = Math.max(j, map.get(s.charAt(i)) + 1);
    }
    map.set(s.charAt(i), i);
    max = Math.max(max, i - j + 1);
  }
  return max;
};

setTimeout(() => {
  console.log(11)
}, Infinity);
