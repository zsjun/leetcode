/**
 * @param {number} n
 * @return {string[]}
 */
// res 是最后结果，str是每次拿到字符串，open 是加入了多少个“（”，close 是加入了多少个“）”，max 是一共有多少对“（）”

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
