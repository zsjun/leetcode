export default (nums) => {
  let maxCur = 0;
  let maxCurSoFar = 0;
  for (let i = 1; i < nums.length; i++) {
    maxCur = Math.max(0, maxCur + nums[i] - nums[i - 1]);
    maxCurSoFar = Math.max(maxCur, maxCurSoFar);
  }
  return maxCurSoFar;
};
