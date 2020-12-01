/**
 * @param {number[]} nums
 * @return {boolean}
 */
export default (nums) => {
  // 只有一个的时候，直接返回
  const len = nums.length;
  if (len === 1) {
    return true;
  }
  let maxRange = nums[0];
  let begin = 0;
  for (let i = 1; i < nums.length; i++) {
    let tempIndex = begin;
    for (let j = begin + 1; j <= maxRange; j++) {
      if (j - begin + nums[j] > maxRange) {
        maxRange = j - begin + nums[j];
        tempIndex = j;
      }
    }
    begin = tempIndex;
    if (maxRange >= len - 1) {
      return true;
    }
  }
  return false;
};
