/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backtrack = (list, tempList, nums) => {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
    return;
  }
  for (let k = 0; k < nums.length; k++) {
    // const nums = [...nums];
    // 真是美妙，如果存在了就不插入了，这样还是按照顺序
    if (tempList.includes(nums[k])) continue;
    tempList.push(nums[k]);
    backtrack(list, tempList, nums);
    tempList.splice(tempList.length - 1, 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums);
  return list;
}
