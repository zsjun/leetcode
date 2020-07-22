/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, i) => {
  list.push([...tempList]);
  for (let k = i; k < nums.length; k++) {
    tempList.push(nums[k]);
    backtrack(list, tempList, nums, k + 1);
    tempList.splice(tempList.length - 1, 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, 0);
  return list;
}
