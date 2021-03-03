/**
 * @param {number} x
 * @return {boolean}
 */
// Runtime: 200 ms, faster than 94.97% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.5 MB, less than 75.49% of JavaScript online submissions for Palindrome Number.
export default (x) => {
  x = "" + x;
  let low = 0;
  let high = x.length - 1;
  while (low < high) {
    if (x.charAt(low) === x.charAt(high)) {
      ++low;
      --high;
    } else {
      return false;
    }
  }
  return true;
};
