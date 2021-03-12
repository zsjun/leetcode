/**
 * @param {number} num
 * @return {string}
 */
// Runtime: 164 ms, faster than 67.32% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 45.1 MB, less than 76.11% of JavaScript online submissions for Integer to Roman.
export default (num) => {
  const m = ["", "M", "MM", "MMM"];
  const c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return m[Math.floor(num / 1000)] + c[Math.floor((num % 1000) / 100)] + x[Math.floor((num % 100) / 10)] + i[num % 10];
};
