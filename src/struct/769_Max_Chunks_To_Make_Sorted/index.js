/**
 * @param {number[]} arr
 * @return {number}
 */
// Runtime: 68 ms, faster than 98.04% of JavaScript online submissions for Max Chunks To Make Sorted.
// Memory Usage: 38.5 MB, less than 50.98% of JavaScript online submissions for Max Chunks To Make Sorted.
export default (arr) => {
  const hasUsed = new Array(arr.length).fill(0);
  let res = 1;
  let max = arr[0];
  hasUsed[max] = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      let flag = hasUsed[0];
      for (let j = 1; j < max; j++) {
        flag &= hasUsed[j];
      }
      if (flag) {
        res++;
      }
      max = arr[i];
    }
    hasUsed[arr[i]] = 1;
  }
  return res;
};
