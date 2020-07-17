/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export default (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const temp = strs[i];
    strs[i] = strs[i]
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");

    if (map.has(strs[i])) {
      map.get(strs[i]).push(temp);
    } else {
      map.set(strs[i], [temp]);
    }
  }
  let arr = [];
  const values = map.values();
  for (let val of values) {
    arr.push(val);
  }
  return arr;
};
