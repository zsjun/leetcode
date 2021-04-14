/**
 * @param {string} s
 * @return {number}
 */
// 考虑字符串s不存在的情况，首先要考虑各种边界情况
//
export default (s) => {
  if (s.length === 0) return 0;
  let low = 0;
  let high = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const s1 = s.substring(i, j);
      const index = s1.indexOf(s.charAt(j));
      if (index > -1) {
        i = i + index;
      } else {
        max = Math.max(max, s1.length + 1);
      }
    }
  }
  return max;
};
