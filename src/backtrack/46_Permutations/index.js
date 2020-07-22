/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, i) => {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
    return;
  }

  for (let k = i; k < nums.length; k++) {
    tempList.push(nums[k]);
    const _k = (k + 1) % nums.length;
    console.log(_k);
    backtrack(list, tempList, nums, _k);
    tempList.splice(tempList.length - 1, 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, 0);
  console.log(list);
  return list;
}
