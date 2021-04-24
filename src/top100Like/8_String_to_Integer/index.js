/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  s = s.trim();
  const first = s.charAt(0);
  if (!/[-|+|0-9]/gi.test(first)) {
    return 0;
  }
  let sign = 1;
  if (first === "-") {
    sign = -1;
  }

  let begin = 0;
  if (first === "+" || first === "-") {
    begin = 1;
  }
  for (begin; begin < s.length; begin++) {
    if (!/[0-9]/gi.test(s.charAt(begin))) {
      break;
    }
  }
  let start = 0;
  if (first === "+" || first === "-") {
    start = 1;
  }
  for (start; start < s.length; start++) {
    if (s.charAt(start) !== "0") {
      break;
    }
  }
  s = s.substring(start, begin);
  let res = +s * sign;
  console.log(res);
  if (res > 0x7fffffff) {
    res = 0x7fffffff;
  }
  if (res < -0x80000000) {
    res = -0x80000000;
  }
  return res;
};
