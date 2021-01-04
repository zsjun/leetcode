/**
 * @param {number[]} arr
 * @return {number}
 */
// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Max Chunks To Make Sorted.
// Memory Usage: 38.5 MB, less than 50.98% of JavaScript online submissions for Max Chunks To Make Sorted.
export default (arr) => {
  let res = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (max === i) {
      res++;
    }
  }
  return res;
};
