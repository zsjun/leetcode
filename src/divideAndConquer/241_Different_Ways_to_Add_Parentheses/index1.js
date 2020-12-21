/**
 * @param {string} input
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 71.05% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 41.1 MB, less than 34.21% of JavaScript online submissions for Different Ways to Add Parentheses.
const computeWithDP = (input, map) => {
  const res = [];
  const len = input.length;
  for (let i = 0; i < len; i++) {
    const charI = input.charAt(i);
    if (charI == "+" || charI == "-" || charI == "*") {
      const part1Res = [];
      const part2Res = [];
      const part1 = input.substring(0, i);
      const part2 = input.substring(i + 1);
      if (map.has(part1)) {
        part1Res = map.get(part1);
      } else {
        part1Res = computeWithDP(part1, map);
        map.set(part1, part1Res);
      }
      if (map.has(part2)) {
        part2Res = map.get(part2);
      } else {
        part2Res = computeWithDP(part2, map);
        map.set(part2, part2Res);
      }

      for (let res1 of part1Res) {
        for (let res2 of part2Res) {
          switch (charI) {
            case "+":
              res.push(res1 + res2);
              break;
            case "-":
              res.push(res1 - res2);
              break;
            case "*":
              res.push(res1 * res2);
              break;
            default:
              break;
          }
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(+input);
  }
  return result;
};

export default (input) => {
  const map = new Map();
  return computeWithDP(input, map);
};
