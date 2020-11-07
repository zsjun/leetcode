/**
 * @param {number} n
 * @return {string[]}
 */
const backtrack = (res, str, open, close, max) => {
  console.log(str);
  if (str.length === max * 2) {
    res.push(str);
    return;
  }

  if (open < max) {
    backtrack(res, str + "(", open + 1, close, max);
  }

  if (close < open) {
    backtrack(res, str + ")", open, close + 1, max);
  }
};
export default (n) => {
  let res = [];
  backtrack(res, "", 0, 0, n);
  return res;
};
