/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// 充分理解条件，这里就没有利用好 0 <= arr[i] <= 100
// 如果遇到不明白的，要重新理解一遍题目

export default (arr, target) => {
  const c = new Array(101).fill(0);
  for (let a of arr) {
    c[a]++;
  }
  let res = 0;
  for (let i = 0; i <= 100; i++)
    for (let j = i; j <= 100; j++) {
      const k = target - i - j;
      if (k > 100 || k < 0) continue;
      if (i === j && j === k) res += (c[i] * (c[i] - 1) * (c[i] - 2)) / 6;
      else if (i === j && j !== k) res += ((c[i] * (c[i] - 1)) / 2) * c[k];
      else if (j < k) res += c[i] * c[j] * c[k];
    }
  return Math.floor(res % (1e9 + 7));
};
