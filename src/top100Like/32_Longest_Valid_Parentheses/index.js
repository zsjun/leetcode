/**
 * @param {string} s
 * @return {number}
 */
const isValid = (s) => {
  if (!s) return true;
  const stack = [s.charAt(0)];
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(s.charAt(i));
    } else {
      if (stack.length >= 1) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
export default (s) => {
  if (!s) return 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      for (let j = s.length; j > i; j--) {
        const s1 = s.substring(i, j);
        if (isValid(s1)) {
          max = Math.max(j - i, max);
          break;
        }
      }
    }
  }
  return max;
};
