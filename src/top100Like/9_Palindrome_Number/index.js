/**
 * @param {number} x
 * @return {boolean}
 */

// Runtime: 212 ms, faster than 79.14% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.4 MB, less than 84.31% of JavaScript online submissions for Palindrome Number.
export default (x) => {
  x = "" + x;
  let low = 0;
  let high = x.length - 1;
  //console.log(x)
  while (low <= high) {
    //console.log(x.charAt(low), x.charAt(high))
    if (x.charAt(low) === x.charAt(high)) {
      ++low;
      --high;
    } else {
      return false;
    }
  }
  return true;
};
