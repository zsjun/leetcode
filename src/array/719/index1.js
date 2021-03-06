/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = (a, b) => {
  const tmp = b;
  b = a;
  a = tmp;
};
export default (nums, k) => {
  // 首先排序
  nums.sort((a, b) => a - b);
  console.log(nums);
  let min = nums[0];
  let max = nums[nums.length - 1];
  //  获取最大的距离对，第k大的距离对肯定出现在[0, maxDistance] 之间
  let maxDistance = max - min;
  // low 的结果为k
  let low = 0;

  while (low < maxDistance) {
    // 获取中间值，>> 0.5 取整
    let mid = (low + (maxDistance - low) / 2) >> 0.5;
    // 计算出一共有多少对少于等于mid的键值对
    let count = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
      while (j < nums.length && nums[j] - nums[i] <= mid) j++;
      count += j - i - 1;
    }
    console.log(count);
    if (count < k) {
      low = mid + 1;
    }
    if (count >= k) {
      maxDistance = mid - 1;
    }
  }

  return low;
};
