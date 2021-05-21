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

export default (digits) => {
  if (!digits) {
    return [];
  }
  let ans = [];
  ans[0] = "";
  for (let i = 0; i < digits.length; i++) {
    const len = ans.length;
    for (let k = 0; k < len; k++) {
      const t = ans.pop();
      if (+digits[i] > 1 && +digits[i] < 10) {
        for (let j = 0; j < map[digits[i]].length; j++) {
          ans.unshift(t + map[digits[i]][j]);
        }
      }
    }
  }
  return ans;
};
