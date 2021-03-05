/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (s.length === 0) return "";
  let low = 0;
  let high = 1;
  let findStr = s.charAt(0);
  let i = 1;
  let res = 1;
  while (i < s.length) {
    if (findStr.indexOf(s.charAt(i)) === -1) {
      findStr += s.charAt(i);
      i++;
      res = Math.max(res, i - low);
    } else {
      res = Math.max(res, i - low);
      for (let m = low; m < i; m++) {
        if (s.charAt(m) === s.charAt(i)) {
          low = m + 1;
          i++;
          findStr = s.substring(m + 1, i);
          break;
        }
      }
    }
  }
  return res;
};
