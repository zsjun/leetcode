/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

// Runtime: 608 ms, faster than 26.47% of JavaScript online submissions for XOR Queries of a Subarray.
// Memory Usage: 53.3 MB, less than 38.24% of JavaScript online submissions for XOR Queries of a Subarray.
export default (arr, queries) => {
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    let temp = arr[queries[i][0]];
    for (let j = queries[i][0] + 1; j <= queries[i][1]; j++) {
      temp = temp ^ arr[j];
    }
    res.push(temp);
  }
  return res;
};
