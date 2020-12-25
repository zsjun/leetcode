/**
 * @param {number} n
 * @return {string}
 */

const map = {
  0: "0",
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
  9: "I",
  10: "J",
  11: "K",
  12: "L",
  13: "M",
  14: "N",
  15: "O",
  16: "P",
  17: "Q",
  18: "R",
  19: "S",
  20: "T",
  21: "U",
  22: "V",
  23: "W",
  24: "X",
  25: "Y",
  26: "Z",
};
// Runtime: 76 ms, faster than 70.41% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 38.6 MB, less than 23.60% of JavaScript online submissions for Excel Sheet Column Title.
export default (n) => {
  if (n <= 26) return map["" + n];
  let res = [];
  while (n > 26) {
    let a = Math.floor(n / 26);
    let b = n % 26;
    res.unshift(b);
    n = a;
  }
  res.unshift(n);
  for (let i = 1; i < res.length; i++) {
    if (res[i] === 0) {
      let j = i - 1;
      res[i] = 26;
      res[j]--;
      while (res[j] === 0 && j >= 1 && res[j - 1] > 0) {
        res[j] = 26;
        res[j - 1]--;
        j--;
      }
    }
  }
  let k = 0;
  while (res[k] === 0) {
    res.shift();
    k++;
  }
  console.log(res);
  const temp = res
    .map((item) => {
      return map["" + item];
    })
    .join("");

  return temp;
};
