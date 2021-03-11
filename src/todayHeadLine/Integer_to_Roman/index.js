/**
 * @param {number} num
 * @return {string}
 */
const map = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
export default (num) => {
  let res = "";
  while (num > 0) {
    const temp = num / 1000;
    res += map[temp];
    
  }
};
