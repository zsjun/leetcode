/**
 * @param {number[]} rains
 * @return {number[]}
 */
export default (rains) => {
  // 最后的结果
  const ans = [];
  // 湖和那天下雨的map
  const rainDayMap = new Map();
  // 没有下雨的时候的天数
  const dryDays = [];
  let index = 0;
  for (let i = 0; i < rains.length; i++) {
    if (rains[i] !== 0) {
      if (rainDayMap.has(rains[i])) {
        if (dryDays.length === 0) {
          return [];
        } else {
          ans[index++] = -1;
          let j = 0;
          let len = dryDays.length;
          for (j = 0; j < dryDays.length; j++) {
            if (dryDays[j] > rainDayMap.get(rains[i])) {
              ans[dryDays[j]] = rains[i];
              dryDays.splice(j, 1);
              rainDayMap.set(rains[i], i);
              break;
            }
          }
          if (dryDays.length + 1 !== len) return [];
        }
      } else {
        // 添加到map中
        rainDayMap.set(rains[i], i);
        ans[index++] = -1;
      }
    } else if (rains[i] === 0) {
      dryDays.push(i);
      ans[index++] = 1;
    }
  }
  console.log("11223", ans);
  return ans;
};
