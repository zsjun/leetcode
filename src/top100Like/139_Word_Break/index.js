/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const isMatch = (s, map) => {
  const len = s.length;
  if (len === 0) {
    return true;
  }
  for (let i = 1; i <= len; ++i) {
    if (set.has(s.substring(0, i)) && isMatch(s.substring(i), map)) {
      return true;
    }
  }
  return false;
};
export default (s, wordDict) => {
  const map = new Map();
  for (let i = 0; i < wordDict.length; i++) {
    map.set(wordDict[i], wordDict[i].length);
  }
  return isMatch(s, map);
};
