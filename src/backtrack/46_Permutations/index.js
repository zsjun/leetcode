/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums, target) => {
  if (tempList.length === target) {
    list.push([...tempList]);
    return;
  }
  if (nums.length === 0) return;
  for (let k = 0; k < nums.length; k++) {
    const copyNums = [...nums];
    tempList.push(copyNums[k]);
    copyNums.splice(k, 1);
    backtrack(list, tempList, copyNums, target);
    tempList.splice(tempList.length - 1, 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, nums.length);
  return list;
}
