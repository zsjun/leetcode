/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const sortStr = (str) => {
  if (str === "") return "";
  return str.split("").sort().join("");
};
// Runtime: 132 ms, faster than 68.21% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 48.6 MB, less than 87.21% of JavaScript online submissions for Group Anagrams.
export default (strs) => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < strs.length; i++) {
    const tempStr = sortStr(strs[i]);
    if (!map.has(tempStr)) {
      map.set(tempStr, [strs[i]]);
    } else {
      const tempArr = map.get(tempStr).push(strs[i]);
      map.set(tempStr, tempArr);
    }
  }
  for (let key of map.keys()) {
    res.push(map.get(key));
  }
  return res;
};
