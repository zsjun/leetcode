/**
 * @param {string} digits
 * @return {string[]}
 */

let map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
const getDigitsArr = (digits, res) => {
  if (!digits) return;
  let tempRes = [];
  if (+digits[0] > 1 && +digits[0] < 10) {
    if (res.length === 0) {
      for (let i = 0; i < map[digits[0]].length; i++) {
        tempRes.push(map[digits[0]][i]);
      }
    } else {
      for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < map[digits[0]].length; j++) {
          tempRes.push(res[i] + map[digits[0]][j]);
        }
      }
    }
  }
  res.length = 0;
  for (let i = 0; i < tempRes.length; i++) {
    res.push(tempRes[i]);
  }
  getDigitsArr(digits.substring(1), res);
};
// Runtime: 136 ms, faster than 6.56% of JavaScript online submissions for Letter Combinations of a Phone Number.
// Memory Usage: 38.3 MB, less than 84.36% of JavaScript online submissions for Letter Combinations of a Phone Number.
export default (digits) => {
  if (!digits) {
    return [];
  }
  const res = [];
  getDigitsArr(digits, res);
  return res;
};
