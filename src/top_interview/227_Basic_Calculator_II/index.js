/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (s == null || s.length === 0) return null;
  let sum = 0;
  let tempSum = 0;
  let num = 0;
  let lastSign = "+";
  s = s.replace(/\s+/g, "");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (/\d/.test(c)) {
      num = num * 10 + Number(c);
      if (i !== s.length - 1) {
        continue;
      }
    }
    if (/\D/.test(c) || i === s.length - 1) {
      switch (lastSign) {
        case "+":
          sum += tempSum;
          tempSum = num;
          break;
        case "-":
          sum += tempSum;
          tempSum = -num;
          break;
        case "*":
          tempSum *= num;
          break;
        case "/":
          tempSum = ~~(tempSum / num);
          break;
      }
      lastSign = c;
      num = 0;
    }
  }
  // console.log(sum, tempSum);
  sum += tempSum;
  return sum;
};
