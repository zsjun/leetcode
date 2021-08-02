/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

function canIWin1(total, state, hashMap) {
  const curr = state.join("");
  if (hashMap.has(curr)) return hashMap.get(curr);
  for (let i = 0; i < state.length; i++) {
    if (state[i] === 0) {
      state[i] = 1;
      if (total <= i + 1 || !canIWin1(total - (i + 1), state, hashMap)) {
        hashMap.set(curr, true);
        state[i] = 0;
        return true;
      }
      state[i] = 0;
    }
  }
  hashMap.set(curr, false);
  return false;
}
export default (maxChoosableInteger, desiredTotal) => {
  if (desiredTotal === 0 || desiredTotal === 1) return true;
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal)
    return false;
  const map = new Map();
  const res = new Array(maxChoosableInteger).fill(0);

  return canIWin1(desiredTotal, res, map);
};
