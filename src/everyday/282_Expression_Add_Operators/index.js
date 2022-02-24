/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
// "105"
// 5
function helper(res, path, num, target, pos, nowVal, multed) {
  if (pos >= num.length) {
    if (nowVal === target) {
      res.push(path);
    }
  }
  for (let i = pos; i < num.length; i++) {
    if (i !== pos && num.charAt(pos) === "0") break;
    const cur = +num.substring(pos, i + 1);
    if (pos === 0) {
      helper(res, path + cur, num, target, i + 1, cur, cur);
    } else {
      helper(res, path + "-" + cur, num, target, i + 1, nowVal - cur, -cur);
      helper(res, path + "+" + cur, num, target, i + 1, nowVal + cur, cur);
      helper(
        res,
        path + "*" + cur,
        num,
        target,
        i + 1,
        nowVal - multed + multed * cur,
        multed * cur
      );
    }
  }
}
var addOperators = function (num, target) {
  const res = [];
  if (!num || num.length === 0) return [];
  helper(res, "", num, target, 0, 0, 0);
  return res;
};
