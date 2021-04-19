/**
 * @param {string} s
 * @return {string}
 */

// Runtime: 188 ms, faster than 47.71% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 39.7 MB, less than 96.30% of JavaScript online submissions for Longest Palindromic Substring.
export default (s) => {
  // 首先还是处理特殊情况
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLenStrBegin = 0;
  let maxLen = 0;
  function extendPalindrome(s, low, high) {
    // 还是先考虑特殊的情况，
    if (low > high) {
      return;
    }
    // 这里就是通过中心点往外边扩展，比如 bbabb, 然后在a的地方不断向外边扩展
    while (low >= 0 && high < s.length && s.charAt(low) === s.charAt(high)) {
      --low;
      ++high;
    }

    // 这里就可以判断是否大于maxLen
    // 这里因为s.charAt(i) !== s.charAt(hihg) ,所以最大值是 high-1-（low +1） +1 也就是high-low-1
    if (high - low - 1 > maxLen) {
      maxLenStrBegin = low + 1;
      maxLen = high - low - 1;
    }
  }
  for (let i = 0; i < len - 1; i++) {
    // 首先处理奇数的情况
    extendPalindrome(s, i, i); //assume odd length, try to extend Palindrome as possible
    // 然后处理偶数的情况
    extendPalindrome(s, i, i + 1); //assume even length.
  }
  return s.substring(maxLenStrBegin, maxLenStrBegin + maxLen);
};
