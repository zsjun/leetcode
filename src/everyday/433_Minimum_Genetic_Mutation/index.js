/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// 在这里犯了一个错误，本来想直接操作bank，但是发现我在循环里边使用了bank，然后又在循环体
// 内修改了bank，然后又使用了i，结果就导致了一片混乱
// 比如以下代码
// for (let i = 0; i < bank.length; i++) {
//   const element = array[i];
//   bank.splice(i, 1);
//   ss();
//   bank.push(element);
// }

const diff = (str1, str2) => {
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      diffCount++;
    }
    if (diffCount > 1) {
      return false;
    }
  }
  return diffCount === 1;
};
const recurse = (start, end, bank, soFar, res, visited) => {
  if (start === end) {
    res[0] = Math.min(res[0], soFar);
  }
  for (let e of bank) {
    if (diff(start, e) && !visited.has(e)) {
      visited.add(e);
      recurse(e, end, bank, soFar + 1, res, visited);
      visited.delete(e);
    }
  }
};
const minMutation = (start, end, bank) => {
  const res = [Number.MAX_VALUE];
  const visited = new Set();
  recurse(start, end, bank, 0, res, visited);
  return res[0] == Number.MAX_VALUE ? -1 : res[0];
};

export default minMutation;
