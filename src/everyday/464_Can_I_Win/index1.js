/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
// 这里的难点就是什么是选手的最佳策略，刚开始我的理解是如果当前我不能赢，那我就选择一个最小的
// 但是实际上这里是指选择一个稳赢的，如果当前选择最小，不能让我稳赢，我就不会选择，会选择另外一个
// 如果所有的都是输，那我就认输好了
function canIWin1(total, state, hashMap) {
  const curr = state.join("");
  if (hashMap.has(curr)) return hashMap.get(curr);
  // 挨个选择每个数
  for (let i = 0; i < state.length; i++) {
    // 如果当前的数还没有被选择，则选择该数字
    // 如果当前我选择了该数，但是不能让我稳赢，那我不选择该数了，选择下一个，
    // 直到我试遍了所有的可能后，发现不能赢，那我就认命了
    if (state[i] === 0) {
      // 标记为选择了
      state[i] = 1;
      // 如果total小于当前选择的数，则表示稳赢了
      // 或者减去当前选择的数后，第二个选手开始选择一定输，则也返回true
      if (total <= i + 1 || !canIWin1(total - (i + 1), state, hashMap)) {
        hashMap.set(curr, true);
        state[i] = 0;
        return true;
      }
      state[i] = 0;
    }
  }
  // 当前这种状态不能让我稳赢
  hashMap.set(curr, false);
  return false;
}
export default (maxChoosableInteger, desiredTotal) => {
  //
  if (maxChoosableInteger >= desiredTotal) return true;
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal)
    return false;
  const map = new Map();
  const res = new Array(maxChoosableInteger).fill(0);

  return canIWin1(desiredTotal, res, map);
};
