/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, i, target) => {
  let _temp = [...tempList];
  const count = _temp.reduce((a, b) => a + b, 0);
  if (count === target) {
    list.push([...tempList]);
  }
  for (let k = i; k < nums.length; k++) {
    _temp.push(nums[k]);
    backtrack(list, _temp, nums, k + 1, target);
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
