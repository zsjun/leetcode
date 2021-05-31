/**
 * @param {number} n
 * @return {string[]}
 */

// 回溯法采用递归调用栈，画图解决
const backtrack = (list, str, open, close, max) => {
  if (str.length === max * 2) {
    list.add(str);
    return;
  }

  if (open < max) {
    backtrack(list, str + "(", open + 1, close, max);
  }
  if (close < open) {
    backtrack(list, str + ")", open, close + 1, max);
  }
};
// Runtime: 80 ms, faster than 63.78% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 39.2 MB, less than 47.51% of JavaScript online submissions for Generate Parentheses.
export default (n) => {
  const list = [];
  backtrack(list, "", 0, 0, n);
  return list;
};
