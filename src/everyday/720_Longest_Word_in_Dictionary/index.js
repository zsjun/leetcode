/**
 * @param {string[]} words
 * @return {string}
 */
// Runtime: 108 ms, faster than 75.56% of JavaScript online submissions for Longest Word in Dictionary.
// Memory Usage: 45.1 MB, less than 54.82% of JavaScript online submissions for Longest Word in Dictionary.
export default (words) => {
  if (!words || words.length === 0) return "";
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a.localeCompare(b);
    }
  });
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i]);
    }
  }
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 1; j <= words.length; j++) {
      const tempStr = words[i].slice(0, j);
      if (!map.has(tempStr)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return words[i];
    }
  }
  return "";
};
