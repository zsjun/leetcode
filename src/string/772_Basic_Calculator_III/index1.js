const calculate = (s) => {
  s = s.replace(/\s+/g, "");
  const sLen = s.length;
  // 当前的操作数
  let num = 0;

  const stack = [];
  // 操作符，第一个加上"+
  let opr = "+";
  for (let i = 0; i < sLen; ++i) {
    const c = s.charAt(i);
    if (/^[0-9]+.?[0-9]*$/.test(s.charAt(i))) {
      num = num * 10 + s.charCodeAt(i) - 48;
    } else if (c === "(") {
      let j = i;
      let matchCount = 0;
      for (; i < sLen; ++i) {
        if (s.charAt(i) === "(") ++matchCount;
        if (s.charAt(i) === ")") --matchCount;
        if (matchCount === 0) break;
      }
      num = calculate(s.substring(j + 1, i));
    }
    if (c === "+" || c === "-" || c === "*" || c === "/" || i === sLen - 1) {
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
      opr = c;
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};
export default calculate;
