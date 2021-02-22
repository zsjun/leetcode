/**
 * @param {number} n
 * @return {string}
 */
// Runtime: 96 ms, faster than 24.61% of JavaScript online submissions for Count and Say.
// Memory Usage: 42.3 MB, less than 9.66% of JavaScript online submissions for Count and Say.
export default (n) => {
  let pre = "1";
  for (let i = 2; i <= n; i++) {
    let temp = "";
    let count = 1;
    for (let j = 1; j <= pre.length; j++) {
      if (pre.charAt(j) && pre.charAt(j) === pre.charAt(j - 1)) {
        count++;
      } else {
        temp += `${count}${pre.charAt(j - 1)}`;
        count = 1;
      }
    }
    pre = temp;
  }
  return pre;
};
