/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  // 当小于2的时候返回0
  if (nums == null || nums.length < 2) {
    return 0;
  }
  // 获取最大值和最小值
  let min = nums[0];
  let max = nums[0];
  const numsLen = nums.length;
  for (let num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  // 得到最好的分割距离，也就是桶排序的最好分割距离，以便让最大的max gap不在一个桶里
  let gap = Math.ceil((max - min) / (numsLen - 1));

  //
  if (gap === 0) return 0;
  let bucketsMIN = new Array(numsLen - 1);
  let bucketsMAX = new Array(numsLen - 1);
  // 建立n-1个个桶
  bucketsMIN.fill(Number.MAX_VALUE);
  bucketsMAX.fill(Number.MIN_VALUE);
  // 所有的数据都放到这n-1个桶里边
  for (let num of nums) {
    let idx = Math.floor((num - min) / gap);
    bucketsMIN[idx] = Math.min(num, bucketsMIN[idx]);
    bucketsMAX[idx] = Math.max(num, bucketsMAX[idx]);
  }
  // 遍历n-1个桶，如果一个桶里边有多余两个的数，首先肯定不是最大的，因为正常是最多两个，
  let maxGap = bucketsMAX[0] - bucketsMIN[0];
  let previous = bucketsMAX[0];
  for (let i = 1; i < numsLen - 1; i++) {
    if (
      bucketsMIN[i] === Number.MAX_VALUE &&
      bucketsMAX[i] === Number.MIN_VALUE
    ) {
      continue;
    }
    maxGap = Math.max(maxGap, bucketsMIN[i] - previous);
    previous = bucketsMAX[i];
  }
  // 最后一个桶更新
  maxGap = Math.max(maxGap, max - previous);
  return maxGap;
};
