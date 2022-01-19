/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  const backTrack = (candidates, target, tempList, k) => {
    if (target === 0) {
      res.push([...tempList]);
    }
    if (target < 0) {
      return;
    }
    for (let i = k; i < candidates.length; i++) {
      if (i > k && candidates[i] === candidates[i - 1]) continue;
      tempList.push(candidates[i]);
      backTrack(candidates, target - candidates[i], tempList, i + 1);
      tempList.pop();
    }
  };
  backTrack(candidates, target, [], 0);
  return res;
};
