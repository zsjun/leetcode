/**
 * @param {number[][]} intervals
 * @return {number}
 */
export default (intervals) => {
  let res = Array.from({ length: intervals.length }, (x) => 0);
  let stack = [];
  for (let i = 0; i < intervals.length; i++) {
    while (stack.length > 0 && intervals[stack[stack.length - 1]] < intervals[i]) {
      let j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }
  return res;
};
