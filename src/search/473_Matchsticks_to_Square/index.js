/**
 * @param {number[]} nums
 * @return {boolean}
 */

// [5,5,5,5,4,4,4,4,3,3,3,3]
const generate = (i, nums, target, buckets) => {
  if (i >= nums.length) {
    return buckets[0] === target && buckets[1] === target && buckets[2] === target && buckets[3] === target;
  }

  for (let j = 0; j < 4; j++) {
    if (buckets[j] + nums[i] > target) {
      continue;
    }

    buckets[j] += nums[i];
    if (generate(i + 1, nums, target, buckets)) {
      return true;
    }
    buckets[j] -= nums[i];
  }
  return false;
};
export default (nums) => {
  nums.sort((a, b) => b - a);
  // 不足四个的时候
  if (nums.length < 4) {
    return false;
  }
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) {
    return false;
  }

  // 设置四个桶，如果每个桶的内容相加等于sum * 0.25
  const buckets = [0, 0, 0, 0];
  return generate(0, nums, sum * 0.25, buckets);
};
