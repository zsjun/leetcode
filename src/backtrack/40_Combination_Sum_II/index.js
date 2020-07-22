/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, i, target) => {
  let _temp = [...tempList];
  if (target < 0 || i > nums.length) return;
  if (target === 0) {
    list.push([...tempList]);
  }

  for (let k = i; k < nums.length; k++) {
    if (k > i && nums[k] === nums[k - 1]) continue;
    _temp.push(nums[k]);
    backtrack(list, _temp, nums, k + 1, target - nums[k]);
    _temp = _temp.slice(0, _temp.length - 1);
  }
};

export default function subsets(nums, target) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, 0, target);
  return list;
}
