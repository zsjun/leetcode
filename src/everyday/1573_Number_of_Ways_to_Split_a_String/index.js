/**
 * @param {string} s
 * @return {number}
 */
// 排列组合的简单组合
export default (s) => {
  const mod = 1_000_000_007;
  let ones = 0;
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    ones += s.charAt(i) - "0";
  }
  // 当全部是0的时候
  if (ones === 0) {
    return Math.floor((((len - 1) * (len - 2)) / 2) % mod);
  }
  // 不能划分成3份
  if (ones % 3 !== 0) {
    return 0;
  }
  const onesInEachSplitedBlock = ones / 3;
  let waysOfFirstCut = 0;
  let waysOfSecondCut = 0;
  for (let i = 0, count = 0; i < len; ++i) {
    count += s.charAt(i) - "0";
    // 第一刀切在哪里
    if (count === onesInEachSplitedBlock) {
      ++waysOfFirstCut;
      // 第二刀切在哪里
    } else if (count === 2 * onesInEachSplitedBlock) {
      ++waysOfSecondCut;
    }
  }
  return Math.floor((waysOfFirstCut * waysOfSecondCut) % mod);
};
