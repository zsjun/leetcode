/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// 充分理解条件，这里就没有利用好 0 <= arr[i] <= 100
// 如果遇到不明白的，要重新理解一遍题目
export default (arr, target) => {
  const count = new Map();
  const n = arr.length;
  let res = 0;
  for (let i = 0; i + 1 < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (count.has(target - arr[i] - arr[j])) {
        res += count.get(target - arr[i] - arr[j]);
      }
    }
    if (count.has(arr[i])) {
      count.set(arr[i], count.get(arr[i]) + 1);
    } else {
      count.set(arr[i], 1);
    }
  }
  // System.out.println(result);
  return Math.floor(res % (1000000000 + 7));
};
