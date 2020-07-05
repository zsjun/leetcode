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
          let j = 0;
          ans[index++] = -1;
          for (; j < dryDays.length; j++) {
            if (dryDays[j] > rainDayMap[rains[i]]) {
              ans[dryDay[j]] = rains[i];
              dryDays.splice(j, 1);
              rainDayMap.set(rains[i], i);
              console.log(dryDays);
              break;
            }
          }

          if (j === dryDays.length) return [];
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
  console.log(ans);
  return ans;
};
