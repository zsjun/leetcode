/**
 * @param {string} si
 * @return {number}
 */
// Runtime: 100 ms, faster than 78.72% of JavaScript online submissions for Basic Calculator II.
// Memory Usage: 46.9 MB, less than 32.83% of JavaScript online submissions for Basic Calculator II.
export default (s) => {
  s = s.replace(/\s+/g, "");
  let len = s.length;
  if (!s || len === 0) return 0;
  const stack = [];
  let num = 0;
  let opr = "+";
  for (let i = 0; i < len; i++) {
    if (/^[0-9]+.?[0-9]*$/.test(s.charAt(i))) {
      num = num * 10 + s.charCodeAt(i) - 48;
    }
    if (!/^[0-9]+.?[0-9]*$/.test(s.charAt(i)) || i === len - 1) {
      if (opr === "-") {
        stack.push(-num);
      }
      if (opr === "+") {
        stack.push(num);
      }
      if (opr === "*") {
        stack.push(stack.pop() * num);
      }
      if (opr === "/") {
        const tempNum = stack.pop();
        stack.push(tempNum > 0 ? Math.floor(tempNum / num) : Math.ceil(tempNum / num));
      }
      opr = s.charAt(i);
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b);
};
