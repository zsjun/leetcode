const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
export default (digits) => {
  if (digits.length == 0) return [];
  let dp = map[digits.charAt(0)];
  for (let i = 1; i < digits.length; i++) {
    let res = [];
    for (let j = 0; j < dp.length; j++) {
      let temp = map[digits.charAt(i)];
      for (let k = 0; k < temp.length; k++) {
        res.push(dp[j] + temp[k]);
      }
    }
    dp = res;
  }
  return dp;
};
