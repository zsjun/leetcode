/*
 * @Author: zsj
 * @Date: 2021-06-Sa 06:36:26
 * @Last Modified by:   zsj
 * @Last Modified time: 2021-06-Sa 06:36:26
 */
/**
 * @param {string} s
 * @return {number}
 */
//  Runtime: 80 ms, faster than 48.17% of JavaScript online submissions for Length of Last Word.
//  Memory Usage: 38.8 MB, less than 17.62% of JavaScript online submissions for Length of Last Word.
export default (s) => {
  if (!s) return 0;
  let res = s.split(" ");
  res = res.filter((item) => item);
  return res.length > 0 ? res[res.length - 1].length : 0;
};
