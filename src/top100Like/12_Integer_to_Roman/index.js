/**
 * @param {number} num
 * @return {string}
 */
const map = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};
// Runtime: 160 ms, faster than 70.44% of JavaScript online submissions for Integer to Roman.
// Memory Usage: 44.6 MB, less than 86.97% of JavaScript online submissions for Integer to Roman.
export default (num) => {
  let res = "";
  if (num >= 1000) {
    const count = Math.floor(num / 1000);
    num -= count * 1000;
    for (let i = 0; i < count; i++) {
      res += "M";
    }
  }

  if (num >= 900) {
    res += "CM";
    num -= 900;
  }
  if (num >= 500) {
    res += "D";
    num -= 500;
  }
  if (num >= 400) {
    res += "CD";
    num -= 400;
  }
  if (num >= 100) {
    const count = Math.floor(num / 100);
    num -= count * 100;
    for (let i = 0; i < count; i++) {
      res += "C";
    }
  }
  if (num >= 90) {
    res += "XC";
    num -= 90;
  }
  if (num >= 50) {
    res += "L";
    num -= 50;
  }
  if (num >= 40) {
    res += "XL";
    num -= 40;
  }
  if (num >= 10) {
    const count = Math.floor(num / 10);
    num -= count * 10;
    for (let i = 0; i < count; i++) {
      res += "X";
    }
  }

  if (num >= 9) {
    res += "IX";
    num -= 9;
  }
  if (num >= 5) {
    res += "V";
    num -= 5;
  }
  if (num >= 4) {
    res += "IV";
    num -= 4;
  }
  for (let i = 0; i < num; i++) {
    res += "I";
  }
  return res;
};
