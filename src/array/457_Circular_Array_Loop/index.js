/**
 * @param {number[]} nums
 * @return {boolean}
 */
 int n = nums.length;
 return i + nums[i] >= 0? (i + nums[i]) % n: n + ((i + nums[i]) % n);
// 获取nums 中i的下一步在nums中的位置
const getNextPosition = (nums, i) => {
  let _num = i + nums[i];
  const len = nums.length;
  return _num>= 0? (i + nums[i]) % n: n + ((i + nums[i]) % n);;
};
function circularArrayLoop(nums) {
  if (!nums || nums.length === 1) return false;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      continue;
    }
    let j = i;
    let k = getNextPosition(nums, i);
    while (nums[k] * nums[i] > 0 && nums[getNextPosition(nums, k)] * nums[i] > 0) {
      if (j == k) {
        // check for loop with only one element
        if (j == getNextPosition(nums, j)) {
          break;
        }
        return true;
      }
      j = getNextPosition(nums, j);
      k = getNextPosition(nums, getNextPosition(nums, k));
    }
    // 如果没有找到
    j = i;
    let val = nums[i];
    while (nums[j] * val > 0) {
      let next = getNextPosition(nums, j);
      nums[j] = 0;
      j = next;
    }
  }
  return false;
}
export default circularArrayLoop;
