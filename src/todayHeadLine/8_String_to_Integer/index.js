/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 96 ms, faster than 87.22% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 41.3 MB, less than 39.31% of JavaScript online submissions for String to Integer (atoi).
export default (s) => {
  s = s.trim();
  let flag = 1;
  if (s.charAt(0) === "-") {
    flag = -1;
  }
  let val = "";
  let begin = s.charAt(0) === "-" || s.charAt(0) === "+" ? 1 : 0;
  for (let i = begin; i < s.length; i++) {
    if (/[0-9]/.test(s.charAt(i))) {
      val += s.charAt(i);
    } else {
      break;
    }
  }
  val = val.length > 0 ? +val : 0;
  val *= flag;
  const maxVal = Math.pow(2, 31);
  if (val > maxVal - 1) {
    val = maxVal - 1;
  }
  if (val < -1 * maxVal) {
    val = -1 * maxVal;
  }
  return val;
};
