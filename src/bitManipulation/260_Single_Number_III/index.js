/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  const res = [0, 0];
  let diff = 0;
  // 第一次遍历，获得两个不同的数之间的异或
  for (let i = 0; i < nums.length; i++) {
    diff ^= nums[i];
  }

  // 获取第一个出现1的位置
  diff &= -diff;
  // 这里划分出来两个组，一个包括1的，一个不包括1的
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & diff) === 0) {
      res[0] ^= nums[i];
    } else {
      res[1] ^= nums[i];
    }
  }
  return res;
};
