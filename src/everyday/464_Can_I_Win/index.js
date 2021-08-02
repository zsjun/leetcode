/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

export default (maxChoosableInteger, desiredTotal) => {
  if (desiredTotal === 0 || desiredTotal === 1) return true;
  if ((maxChoosableInteger * (maxChoosableInteger + 1)) / 2 < desiredTotal)
    return false;
  const map = new Map();
  const res = [];
  for (let i = 0; i < maxChoosableInteger; i++) {
    res.push(i + 1);
  }
  let sum = 0;
  let count = 1;
  for (let i = 0; i < maxChoosableInteger; i++) {
    if (count % 2 !== 0) {
      for (let j = i; j < maxChoosableInteger; j++) {
        if (sum + res[j] >= desiredTotal) {
          console.log(count);
          return true;
        }
      }
    } else {
      for (let j = i + 1; j < maxChoosableInteger; j++) {
        if (sum + res[j] >= desiredTotal) {
          return false;
        }
      }
    }
    count++;
    sum += res[i];
  }
  return false;
};
