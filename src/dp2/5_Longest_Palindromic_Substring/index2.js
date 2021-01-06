const expandAroundCenter = (s, i, j) => {
  let max = 0;
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    max = Math.max(max, j - i + 1);
    --i;
    ++j;
  }
  return max;
};
// Runtime: 328 ms, faster than 46.20% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 47.7 MB, less than 19.44% of JavaScript online submissions for Longest Palindromic Substring.
export default (s) => {
  if (s.length === 1 || !s) {
    return s;
  }
  let start = 0;
  const len = s.length;
  let end = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};
