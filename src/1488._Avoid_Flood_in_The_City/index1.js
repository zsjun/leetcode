/**
 * @param {number[]} rains
 * @return {number[]}
 */
export default (rains) => {
  // 最后的结果
  const ans = rains.map((item) => {
    return item !== 0 ? -1 : 1;
  });
  // 湖和那天下雨的map
  const rainDayMap = new Map();
  // 没有下雨的时候的天数
  const dryDays = rains.map((item) => {
    return -1;
  });
  // entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
  for (const [index, val] of rains.entries()) {
    if (val === 0) {
      dryDays[index] = 0;
    } else if (rainDayMap.has(val)) {
      // 在dryDays中发现某个下雨天的时候，第一次出现晴天的时候
      const index1 = dryDays.indexOf(0, rainDayMap.get(val));
      // 当没有发现前面有晴天的时候，明显出现flood
      if (index1 === -1) {
        return [];
      } else {
        ans[index1] = val;
        // 重新更新rainMap
        rainDayMap.set(val, index);
        dryDays[index1] = -1;
      }
    } else {
      rainDayMap.set(val, index);
    }
  }
  return ans;
};
