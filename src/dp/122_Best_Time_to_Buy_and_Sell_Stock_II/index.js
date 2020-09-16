export default (nums) => {
  let maxCur = 0;
  let res = 0;

  for(let i = 1; i < nums.length;i++) {
    if (nums[i] >= nums[i-1]) {
      maxCur = maxCur+nums[i]-nums[i-1];
      res += maxCur;
    }else {
      maxCur = 0;
    }
  }
  return res;
}

