/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  if (!s || s.length === 1) return 0;
  const cnt = new Array(26).fill(0);
  let res = 0;
  const used = new Set();
  for (let i = 0; i < s.length; ++i) {
    ++cnt[s.charCodeAt(i) - 97];
  }
  // 得到
  for (let i = 0; i < 26; ++i) {
    while (cnt[i] > 0) {
      if (!used.has(cnt[i])) {
        used.add(cnt[i]);
        break;
      } else {
        --cnt[i];
        ++res;
      }
    }
  }
  return res;
};
