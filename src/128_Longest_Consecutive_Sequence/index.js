/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  if (nums.length === 0 || !nums) return 0;
  if (nums.length === 1) return 1;
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    numsMap.set(nums[i], 1);
  }
  let maxLen = 1;
  for (let j = 0; j < nums.length; j++) {
    let k = 0;
    while (numsMap.get(nums[j]--)) {
      k++;
    }

    while (numsMap.get(++nums[j])) {
      k++;
    }
    maxLen = Math.max(maxLen, k);
  }
  return maxLen;
};
