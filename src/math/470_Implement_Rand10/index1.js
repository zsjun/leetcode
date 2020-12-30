/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
// Runtime: 124 ms, faster than 29.03% of JavaScript online submissions for Implement Rand10() Using Rand7().
// Memory Usage: 49.4 MB, less than 6.45% of JavaScript online submissions for Implement Rand10() Using Rand7().
const rand10 = () => {
  let a = rand7();
  let b = rand7();
  // 得到rand49
  let num = (a - 1) * 7 + b;

  if (num <= 10) return num;

  return rand10();
};
export default rand10;
