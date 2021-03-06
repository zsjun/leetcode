/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//[1,2,2]
const backtrack = (list, tempList, nums, i) => {
  // let _temp = [...tempList];
  list.push([...tempList]);
  for (let k = i; k < nums.length; k++) {
    if (k > i && nums[k - 1] === nums[k]) continue;
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
  console.log(list);
  return list;
}
