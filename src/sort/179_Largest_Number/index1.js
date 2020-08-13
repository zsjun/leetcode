/**
 * @param {number[]} nums
 * @return {string}
 */
export default (nums) => {
  if (nums == null || nums.length == 0) {
    return "";
  }
  // 转成字符串数组
  for (let i = 0; i < nums.length; i++) {
    nums[i] = "" + nums[i];
  }
  nums.sort((str1, str2) => {
    const s1 = str1 + str2;
    const s2 = str2 + str1;
    return s2.localeCompare(s1);
  });
  if (s_num[0].charAt(0) == "0") {
    return "0";
  }

  return nums.join("");
};
