// Runtime: 160 ms, faster than 75.96% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 43.6 MB, less than 99.13% of JavaScript online submissions for Integer to Roman.
export default (num) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let res = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += strs[i];
    }
  }
  return res;
};
