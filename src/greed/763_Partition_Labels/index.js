/**
 * @param {string} S
 * @return {number[]}
 */

const getBigStr = (S, begin, res) => {
  let max = begin;
  const len = S.length;
  if (begin >= S.length) {
    return;
  }
  const lastIndex = S.lastIndexOf(S[begin]);
  if (lastIndex !== -1) {
    max = Math.max(max, lastIndex);
    let s1 = S.substring(begin, lastIndex + 1);
    for (let i = 1; i < s1.length; i++) {
      const newLastIndex = S.lastIndexOf(s1[i]);
      if (newLastIndex > max) {
        max = newLastIndex;
        s1 = S.substring(begin, max + 1);
      }
    }
    res.push(S.substring(begin, max + 1));
  } else {
    res.push(S[begin]);
    max = begin++;
  }
  return max;
};
export default (S) => {
  let res = [];
  let max = -1;
  while (max < S.length) {
    max = getBigStr(S, max + 1, res);
  }
  return res.map((item) => item.length);
};
