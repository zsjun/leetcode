/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s, low, high, count) => {
  if (count > 1) return false;
  while (low < high) {
    if (s[low] !== s[high]) {
      count++;
      return isPalindrome(s, low, high - 1, count) || isPalindrome(s, low + 1, high, count);
    } else {
      low++;
      high--;
    }
  }
  return true;
};
const validPalindrome = (s) => {
  if (!s) {
    return false;
  }
  if (s.length === 1) {
    return true;
  }
  let low = 0;
  let high = s.length - 1;
  let count = 0;
  return isPalindrome(s, 0, high, count);
};
export default isPalindrome;
