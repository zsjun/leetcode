/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
//  Runtime: 112 ms, faster than 96.77% of JavaScript online submissions for Implement Rand10() Using Rand7().
//  Memory Usage: 47.4 MB, less than 48.39% of JavaScript online submissions for Implement Rand10() Using Rand7().
const rand10 = () => {
  let a = rand7();
  let b = rand7();
  // 得到rand49
  let num = (a - 1) * 7 + b;

  if (num <= 40) return (num % 10) + 1;
  a = num - 40; // rand 9
  b = rand7();
  num = (a - 1) * 7 + b; // rand 63
  if (num <= 60) return (num % 10) + 1;

  a = num - 60; // rand 3
  b = rand7();
  num = (a - 1) * 7 + b; // rand 21
  if (num <= 20) return (num % 10) + 1;
  return rand10();
};
export default rand10;
