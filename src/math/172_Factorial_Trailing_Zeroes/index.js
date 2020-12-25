/**
 * @param {number} n
 * @return {number}
 */
export default (n) => {
  if (n <= 4) return 0;
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum *= i;
  }

  sum = "" + sum;
  sum = sum.split("");
  let count = 0;
  let j = sum.length - 1;
  console.log(sum);
  while (sum[j] === "0") {
    j--;
    count++;
  }

  return count;
};
