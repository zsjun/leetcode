/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Runtime: 100 ms, faster than 38.63% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 44.6 MB, less than 22.16% of JavaScript online submissions for Combination Sum II.
const dfs = (candidates, level, target, singleRes, res) => {
  let sum = 0;
  if (singleRes.length > 0) {
    sum = singleRes.reduce((a, b) => a + b);
  }
  if (sum === target) {
    res.push(singleRes);
    return;
  } else if (sum > target) {
    return;
  }
  for (let i = level; i < candidates.length; ) {
    singleRes.push(candidates[i]);
    dfs(candidates, i + 1, target, [...singleRes], res);
    singleRes.pop(candidates[i]);
    if (candidates[i + 1] === candidates[i]) {
      while (candidates[i + 1] === candidates[i]) {
        i++;
      }
      i++;
    } else {
      i++;
    }
  }
};
export default (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const res = [];
  dfs(candidates, 0, target, [], res);
  console.log(res);
  return res;
};
