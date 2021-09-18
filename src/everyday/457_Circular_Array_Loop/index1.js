// 下一步的index
function getIndex(i, nums) {
  const n = nums.length;
  return i + nums[i] >= 0 ? (i + nums[i]) % n : n + ((i + nums[i]) % n);
}
export default (nums) => {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue;
    }
    // 快慢指针
    let slow = i;
    let fast = getIndex(i, nums);
    // 判断是不是同一个方向
    while (
      nums[fast] * nums[i] > 0 &&
      nums[getIndex(fast, nums)] * nums[i] > 0
    ) {
      if (slow === fast) {
        // 只有一个节点
        if (slow === getIndex(slow, nums)) {
          break;
        }
        return true;
      }
      slow = getIndex(slow, nums);
      fast = getIndex(getIndex(fast, nums), nums);
    }
    // 如果没有发现循环，把一路上所有的点都设置为0
    slow = i;
    const val = nums[i];
    while (nums[slow] * val > 0) {
      const next = getIndex(slow, nums);
      nums[slow] = 0;
      slow = next;
    }
  }
  return false;
};
