/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export default (s, k) => {
  // 处理边界情况
  if (s.length === 0 || k === 0) return 0;
  // 不同字符的个数
  let distinct = 0;
  // 记录每个字符出现的次数
  const map = new Map();
  let low = 0;
  let res = 0;

  for (let high = 0; high < s.length; high++) {
    const highChar = s.charAt(high);
    if (!map.has(highChar)) {
      map.set(highChar, 1);
      distinct++;
    } else {
      let count = map.get(highChar) + 1;
      map.set(highChar, count);
    }
    // 如果不同的字符数小于k，继续增加high，直到找到包含大于k个字符
    if (distinct <= k) {
      res = Math.max(res, high - low + 1);
    } else {
      // 大于k个字符的时候，这时候就要更新low，不断删除字符，直到小于k个不同字符
      while (distinct > k) {
        const lowChar = s.charAt(low);
        let lowCount = map.get(lowChar);
        if (lowCount > 1) {
          map.set(lowChar, lowCount - 1);
        } else {
          map.delete(lowChar);
          distinct--;
        }
        low++;
      }
    }
  }
  return res;
};
