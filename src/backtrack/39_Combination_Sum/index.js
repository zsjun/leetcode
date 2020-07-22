/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, target, i) => {
  let _temp = [...tempList];
  if (target < 0) return;
  if (target === 0) {
    list.push([...tempList]);
  }

  for (let k = i; k < nums.length; k++) {
    _temp.push(nums[k]);
    backtrack(list, _temp, nums, target - nums[k], k);
    _temp = _temp.slice(0, _temp.length - 1);
  }
};

export default function subsets(nums, target) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, target, 0);
  return list;
}
