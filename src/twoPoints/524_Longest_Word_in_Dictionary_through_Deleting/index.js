/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */

const isOk = (s, s1) => {
  let sPoint = 0;
  let s1Point = 0;
  while (sPoint < s.length && s1Point < s1.length) {
    if (s[sPoint] === s1[s1Point]) {
      sPoint++;
      s1Point++;
    } else {
      sPoint++;
    }
  }
  return s1Point === s1.length;
};
//
export default (s, d) => {
  let maxStr = "";
  for (let i = 0; i < d.length; i++) {
    for (let j = 0; j < d[i].length; j++) {
      if (
        (isOk(s, d[i]) && d[i].length > maxStr.length) ||
        (isOk(s, d[i]) && d[i].length === maxStr.length && d[i].localeCompare(maxStr) > 0)
      ) {
        maxStr = d[i];
      }
    }
  }
  return maxStr.length > 0 ? maxStr : "";
};
