/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */

//  Runtime: 68 ms, faster than 69.23% of JavaScript online submissions for Broken Calculator.
//  Memory Usage: 38.9 MB, less than 30.77% of JavaScript online submissions for Broken Calculator.
// console.log src/everyday/991_Broken_Calculator/index1.js:21
//   123 92 64 1

// console.log src/everyday/991_Broken_Calculator/index1.js:21
//   123 28 32 0

// console.log src/everyday/991_Broken_Calculator/index1.js:21
//   123 28 16 1

// console.log src/everyday/991_Broken_Calculator/index1.js:21
//   123 12 8 1

// console.log src/everyday/991_Broken_Calculator/index1.js:21
//   123 4 4 1
// 公式是 这里a可以是0或者是多次减一, b和c是0次或者1
// ((startValue-a*1)*2-b*1)*2-c*1 = target
// startValue * 2 *2 -a *1 *2 *2-b*1*2-c*1 = target

// Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Broken Calculator.
// Memory Usage: 38.8 MB, less than 38.46% of JavaScript online submissions for Broken Calculator.
export default (startValue, target) => {
  if (startValue >= target) {
    return startValue - target;
  }
  let res = 0;
  let multiple = 1;
  // 首先看下需要多少个乘法,比如startValue=3，target=100，
  // 首先看下3需要乘以多少个2才能比100大，这里是6次
  while (startValue * multiple < target) {
    multiple <<= 1;
    res++;
  }
  // multiple = 64, diff = 92
  let diff = startValue * multiple - target;
  if (diff === 0) {
    return res;
  }
  // 6, 92, 64
  // 当我们发现我们乘多了之后，然后就是想办法在某个位置先减去1个1或者多个1，再乘，这样才能更接近target
  while (diff > 0) {
    // Math.floor(diff / multiple) 是指((startValue-a*1)*2-b*1)*2 = target计算a
    res += Math.floor(diff / multiple);

    diff -= Math.floor(diff / multiple) * multiple;
    multiple >>= 1;
  }
  return res;
};
