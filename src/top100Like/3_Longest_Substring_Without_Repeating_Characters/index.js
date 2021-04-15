/**
 * @param {string} s
 * @return {number}
 */
// 考虑字符串s不存在的情况，首先要考虑各种边界情况
//
// 第一种思路肯定是暴力解法，其实
export default (s) => {
  // 如果不存在，则返回0
  if (s.length === 0) return 0;
  let low = 0;
  let high = 0;
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const s1 = s.substring(i, j);
      const index = s1.indexOf(s.charAt(j));
      // console.log(s1,index,s.charAt(j))
      if (index > -1) {
        i = i + index + 1;
      }
      max = Math.max(max, s1.length);

      // console.log(max)
    }
  }
  return max;
};
