/**
 * @param {string} s
 * @return {boolean}
 */

// Runtime: 88 ms, faster than 24.85% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 39.5 MB, less than 31.06% of JavaScript online submissions for Valid Parentheses.
export default (s) => {
  const left = [];
  const leftS = ["(", "{", "["];
  const rightS = [")", "}", "]"];
  for (let i = 0; i < s.length; i++) {
    if (leftS.includes(s.charAt(i))) {
      left.push(s.charAt(i));
    } else {
      switch (s.charAt(i)) {
        case ")":
          if (left[left.length - 1] === "(") {
            left.pop();
          } else {
            return false;
          }
          break;
        case "}":
          if (left[left.length - 1] === "{") {
            left.pop();
          } else {
            return false;
          }
          break;
        case "]":
          if (left[left.length - 1] === "[") {
            left.pop();
          } else {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }
  return left.length === 0 ? true : false;
};
