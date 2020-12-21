/**
 * @param {string} input
 * @return {number[]}
 */

// Runtime: 84 ms, faster than 61.84% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 40.7 MB, less than 42.11% of JavaScript online submissions for Different Ways to Add Parentheses.
const diffWaysToCompute = (input) => {
  const ret = [];
  for (let i = 0; i < input.length; i++) {
    const charI = input.charAt(i);
    if (charI === "-" || charI === "*" || charI === "+") {
      const part1 = input.substring(0, i);
      const part2 = input.substring(i + 1);
      const part1Ret = diffWaysToCompute(part1);
      const part2Ret = diffWaysToCompute(part2);
      for (let p1 of part1Ret) {
        for (let p2 of part2Ret) {
          let c = 0;
          switch (charI) {
            case "+":
              c = p1 + p2;
              break;
            case "-":
              c = p1 - p2;
              break;
            case "*":
              c = p1 * p2;
              break;
          }
          ret.push(c);
        }
      }
      // console.log(ret);
    }
  }
  if (ret.length === 0) {
    ret.push(+input);
  }
  return ret;
};
export default diffWaysToCompute;
