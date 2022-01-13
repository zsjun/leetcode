/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  if (!s) return "";

  if (s.length < 2) {
    return s;
  }
  let begin = 0;
  let maxLen = 0;
  function extendPalindrome(s, j, k) {
    while (j >= 0 && k < s.length && s.charAt(j) === s.charAt(k)) {
      j--;
      k++;
    }
    if (maxLen < k - j - 1) {
      begin = j + 1;
      maxLen = k - j - 1;
    }
  }

  const len = s.length;
  for (let i = 0; i < len; i++) {
    // 奇数
    extendPalindrome(s, i, i);
    // 偶数
    extendPalindrome(s, i, i + 1);
  }
  return s.substring(begin, begin + maxLen);
};
