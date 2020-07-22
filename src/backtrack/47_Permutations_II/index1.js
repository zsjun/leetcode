const backtrack = (list, tempList, nums, used) => {
  if (tempList.length === nums.length) {
    list.push([...tempList]);
    return;
  }
  for (let k = 0; k < nums.length; k++) {
    if (used[k] || (k > 0 && nums[k] === nums[k - 1] && !used[k - 1])) continue;
    used[k] = true;
    tempList.push(nums[k]);
    backtrack(list, tempList, nums, used);
    used[k] = false;
    tempList.splice(tempList.length - 1, 1);
  }
};

export default function subsets(nums) {
  let list = [];
  let tempList = [];
  // 是否存在过
  let used = [];
  nums.sort((a, b) => a - b);
  backtrack(list, tempList, nums, used);
  console.log(list);
  return list;
}
