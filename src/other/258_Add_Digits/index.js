/**
 * @param {number} num
 * @return {number}
 */
//  Runtime: 104 ms, faster than 31.97% of JavaScript online submissions for Add Digits.
//  Memory Usage: 39.7 MB, less than 96.11% of JavaScript online submissions for Add Digits.
//  Next challenges:
export default (num) => {
  num = "" + num;
  while (num.length !== 1) {
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
      temp += +num[i];
    }
    num = "" + temp;
  }
  return +num;
};
