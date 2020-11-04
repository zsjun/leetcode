/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export default (s, k) => {
  if (s.length === 0) return 0;
  let max = 0;
  const used = [];
  for (let i = k; i <= s.length; i++) {
    for (let j = 0; j <= i - k; j++) {
      let subStr = s.substring(j, i);
      if (subStr.length < max || subStr.length < k || (used.includes(subStr) && used.length > 0)) continue;
      let map = new Map();
      for (let m = 0; m < subStr.length; m++) {
        if (map.get(subStr[m])) {
          map.set(subStr[m], map.get(subStr[m]) + 1);
        } else {
          map.set(subStr[m], 1);
        }
      }
      let flag = true;
      for (let val of map.values()) {
        if (val < k) {
          flag = false;
          break;
        }
      }
      if (flag) {
        max = Math.max(max, subStr.length);
      } else {
        used.push(subStr);
      }
    }
  }
  return max;
};
