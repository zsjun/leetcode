/**
 * @param {number} N
 * @return {number[]}
 */

// Runtime: 84 ms, faster than 81.25% of JavaScript online submissions for Beautiful Array.
// Memory Usage: 40.1 MB, less than 87.50% of JavaScript online submissions for Beautiful Array.
export default (N) => {
  let res = [];
  res.push(1);
  while (res.length < N) {
    const tmp = [];
    for (let odd of res) {
      if (odd * 2 - 1 <= N) {
        tmp.push(odd * 2 - 1);
      }
    }
    for (let even of res) {
      if (even * 2 <= N) {
        tmp.push(even * 2);
      }
    }
    res = tmp;
  }
  return res;
};
