/**
 * @param {number[]} T
 * @return {number[]}
 */

// Runtime: 160 ms, faster than 70.63% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 49 MB, less than 72.86% of JavaScript online submissions for Daily Temperatures.
export default (T) => {
  const len = T.length;
  const stack = [];
  const res = [];
  for (let i = len - 1; i >= 0; i--) {
    const current = T[i];
    while (stack.length > 0 && current >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    res[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;

    stack.push(i);
    console.log(stack);
  }
  return res;
};
