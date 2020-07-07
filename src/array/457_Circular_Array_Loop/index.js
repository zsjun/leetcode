/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 获取nums 中i的下一步在nums中的位置
const getNextPosition = (nums, i) => {
  let _num = i + nums[i];
  const len = nums.length;
  if (_num > 0 && _num < len) {
    return _num;
  } else if (_num > 0 && _num >= len) {
    _num = _num % len;
  } else if (_num <= 0) {
    _num = (len + _num) % len;
  }
  return _num;
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
    let nextK = getNextPosition(nums, k);
    while (nums[j] * nums[k] > 0 && nums[k] * nums[nextK] > 0) {
      console.log(j);
      console.log(nextK);
      if (j === nextK) {
        // 只有一个时候，形成死循环
        if (j === getNextPosition(nums, j)) {
          break;
        }
        return true;
      }
      j = k;
      k = nextK;
      nextK = getNextPosition(nums, nextK);
    }
    // 如果没有找到
    j = i;
    let val = nums[j];
    let nextJ = getNextPosition(nums, j);
    while (nums[nextJ] * val < 0) {
      nums[nextJ] = 0;
      nextJ = getNextPosition(nums, nextJ);
    }
  }
  return false;
}
export default circularArrayLoop;
