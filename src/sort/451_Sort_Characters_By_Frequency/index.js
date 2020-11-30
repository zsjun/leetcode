/**
 * @param {string} s
 * @return {string}
 */

export default (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      const count = map.get(s[i]) + 1;
      map.set(s[i], count);
    }
  }
  let res = [];
  for (let [key, value] of map) {
    res.push({
      key,
      value,
    });
  }
  res.sort((a, b) => b.value - a.value);
  let res1 = "";
  for (let i = 0; i < res.length; i++) {
    res1 += res[i].key.repeat(res[i].value);
  }
  return res1;
};
