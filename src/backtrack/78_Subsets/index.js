/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, i) => {
  let _temp = [...tempList];
  list.push([...tempList]);
  for (let k = i; k < nums.length; k++) {
    _temp.push(nums[k]);
    backtrack(list, _temp, nums, k + 1);
    _temp = _temp.slice(0, _temp.length - 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, 0);
  return list;
}
