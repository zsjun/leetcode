/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// [1, 2, 3, 4, 5][(4, 3, 5, 1, 2)];
export default (pushed, popped) => {
  if (pushed.length === 0) return;
  let popIndex = 0;
  let pushIndex = 0;
  const stack = [pushed[0]];
  while (popIndex < popped.length) {
    if (popped[popIndex] !== stack[stack.length - 1]) {
      ++pushIndex;
      if (pushIndex < pushed.length) {
        stack.push(pushed[pushIndex]);
      } else {
        break;
      }
    } else {
      stack.pop();
      ++popIndex;
      if (stack.length === 0) {
        ++pushIndex;
        if (pushIndex < pushed.length) {
          stack.push(pushed[pushIndex]);
        }
      }
    }
  }
  return stack.length === 0;
};
