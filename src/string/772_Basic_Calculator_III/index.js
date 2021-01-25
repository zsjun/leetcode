// "1 + 1" = 2;
// " 6-4 / 2 " = 4;
// "2*(5+5*2)/3+(6/2+8)" = 21;
// "(2+6* 3+5- (3*14/7+2)*5)+3" = -12;

const calculate = (s) => {
  const n = s.length;
  let num = 0,
    curRes = 0,
    res = 0;
  let op = "+";
  // const stack = [];
  for (let i = 0; i < n; ++i) {
    const c = s[i];
    if (c >= "0" && c <= "9") {
      num = num * 10 + +(c - "0");
    } else if (c === "(") {
      let j = i,
        cnt = 0;
      for (; i < n; ++i) {
        if (s[i] === "(") ++cnt;
        if (s[i] === ")") --cnt;
        if (cnt === 0) break;
      }
      num = calculate(s.substr(j + 1, i - j - 1));
    }
    if (c === "+" || c === "-" || c === "*" || c === "/" || i === n - 1) {
      switch (op) {
        case "+":
          curRes += num;
          break;
        case "-":
          curRes -= num;
          break;
        case "*":
          curRes *= num;
          break;
        case "/":
          curRes = Math.floor(curRes / num);
          break;
      }
      if (c === "+" || c === "-" || i === n - 1) {
        res += curRes;
        curRes = 0;
      }
      op = c;
      num = 0;
    }
  }
  return res;
};
export default calculate;
