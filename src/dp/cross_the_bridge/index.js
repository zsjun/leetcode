export default (numsArr = [], n = 50) => {
  if (numsArr.length === 1) return numsArr[0];

  numsArr.sort((a, b) => a - b);

  // opt[i] 表示i个人过河的最短时间
  // pre 表示i-2个人过河的最短时间，preNext表示i-1个人过河的最短时间
  let pre = numsArr[0];
  let preNext = numsArr[1];

  for (let i = 2; i < n; i++) {
    let temp = Math.min(preNext + numsArr[0] + numsArr[i], pre + numsArr[0] + numsArr[i] + 2 * numsArr[1]);
    pre = preNext;
    preNext = temp;
  }
  return preNext;
};
