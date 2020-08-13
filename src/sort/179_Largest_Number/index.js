/**
 * @param {number[]} nums
 * @return {string}
 */
export default (nums) => {
  nums.sort((a, b) => {
    let transA = a;
    let transB = b;
    if (("" + a).length > 1) {
      transA = Math.ceil(("" + a).split("").reduce((a1, b1) => +a1 + +b1) / ("" + a).length);
    }
    if (("" + b).length > 1) {
      transB = Math.ceil(("" + b).split("").reduce((a1, b1) => +a1 + +b1) / ("" + b).length);
    }
    console.log(b, a);
    if (transB === transA) {
      if (("" + b).length < ("" + a).length) {
        return -1;
      } else if (("" + b).length === ("" + a).length) {
        for (let i = 0; i < ("" + b).length; i++) {
          if (+("" + b).charAt(i) < +("" + a).charAt(i)) {
            return -1;
          } else {
            return 1;
          }
        }
      }
    } else {
      return transB - transA;
    }
  });
  return nums.join("");
};
