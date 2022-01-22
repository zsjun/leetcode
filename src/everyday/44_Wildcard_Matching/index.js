/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // sStart 的索引
  let sStart = 0;
  let pStart = 0;
  // * 出现的位置
  let PstartIndex = -1;
  // s中和*对应的开始坐标
  let SstartIndex = 0;

  while (sStart < s.length) {
    // 如果是相等的，或者是？的时候，pStart++，sStart++
    if (
      pStart < p.length &&
      (s.charAt(sStart) === p.charAt(pStart) || p.charAt(pStart) === "?")
    ) {
      pStart++;
      sStart++;
      // 如果是发现是*，
    } else if (pStart < p.length && p.charAt(pStart) === "*") {
      // PstartIndex 是p的索引
      PstartIndex = pStart;
      pStart++;
      SstartIndex = sStart;
      // 当走到结束之后，如果发现s还有很多，则需要重新回到起点，重新开始计算
      // 不断的进行重试
    } else if (PstartIndex !== -1) {
      // SstartIndex++;
      SstartIndex++;
      sStart = SstartIndex;
      pStart = PstartIndex + 1;
    } else {
      return false;
    }
  }

  while (pStart < p.length && p.charAt(pStart) === "*") {
    pStart++;
  }
  return pStart >= p.length;
};
