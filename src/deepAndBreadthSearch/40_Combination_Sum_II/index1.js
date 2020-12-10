/**
 * @param {number[]} candidates
 * @return {number[][]}
 */
const backTracking = (candidates, used, list, level, target, res) => {
  let sum = 0;
  if (list.length > 0) {
    sum = list.reduce((a, b) => a + b);
  }
  if (sum === target) {
    res.push([...list]);
    return;
  } else if (sum > target) {
    return;
  }
  for (let i = level; i < candidates.length; i++) {
    if (used[i]) {
      continue;
    }
    // 去除掉重复，防止重复
    if (i > 0 && candidates[i - 1] === candidates[i] && !used[i - 1]) {
      continue;
    }
    used[i] = 1;
    list.push(candidates[i]);
    backTracking(candidates, used, list, i + 1, target, res);
    used[i] = 0;
    list.pop();
  }
};

// Runtime: 92 ms, faster than 68.43% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 40.5 MB, less than 54.71% of JavaScript online submissions for Combination Sum II.
export default (candidates, target) => {
  if (!candidates || candidates.length === 0) return [];
  const res = [];
  // 是否被使用过
  const used = new Array(candidates.length).fill(0);
  candidates.sort((a, b) => a - b);
  backTracking(candidates, used, [], 0, target, res);
  // console.log(candidates);
  return res;
};
