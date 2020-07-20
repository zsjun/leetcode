/**
 * @param {number} n
 * @return {number}
 */

export default (n) => {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
