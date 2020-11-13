/**
 * @param {number[]} T
 * @return {number[]}
 */
export default (T) => {
  // if (!T || T.length === 0) return [];
  // for (let i = 0; i < T.length; i++) {
  //   let count = 0;
  //   for (let j = i + 1; j < T.length; j++) {
  //     if (T[j] <= T[i] && j !== T.length - 1) {
  //       count++;
  //     } else if (T[j] > T[i]) {
  //       count++;
  //       T[i] = count;
  //       break;
  //     } else if (j === T.length - 1) {
  //       T[i] = 0;
  //     }
  //   }
  // }
  // T[T.length - 1] = 0;
  // return T;
  // [73,74,75,71,69,72,76,73]
  //  1 1   4   2  1 1
  const stack = [];
  const ret = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      let idx = stack[stack.length - 1];
      stack.pop();
      ret[idx] = i - idx;
    }
    stack.push(i);
  }
  return ret;
};
