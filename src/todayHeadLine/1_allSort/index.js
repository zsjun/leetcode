// 给定一个数字，按照原有数字中的各个位上面的数字进行组合，求出比原有数字大的数中最小的数。例如：1234 -> 1243 ，1243 ->1324 ，1324 -> 1342

export default (number) => {
  const numberStr = ("" + number).split("");
  if (numberStr.length <= 1) return +numberStr;
  const len = numberStr.length - 1;
  const minArr = numberStr.map((item) => {
    return +item;
  });
  const min = Math.min(...minArr);
  let last = len;
  while (numberStr[last] === "" + min) {
    --last;
  }
  let i = last - 1;
  let res = "";
  while (i >= 0) {
    if (+numberStr[i] < +numberStr[last]) {
      for (let m = 0; m < i; m++) {
        res += numberStr[m];
      }
      for (let m1 = last; m1 <= len; m1++) {
        res += numberStr[m1];
      }
      res += numberStr[i];
      for (let m2 = i + 1; m2 < last; m2++) {
        res += numberStr[m2];
      }
      return +res;
    } else {
      --i;
    }
  }
  return +res;
};
