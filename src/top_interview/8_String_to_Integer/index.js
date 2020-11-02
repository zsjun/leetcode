/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (!s) return 0;
  s = s.replace(/\s+/g, "");
  if (
    (s[0] !== "-" && s[0] !== "+" && /\D/g.test(s[0])) ||
    (s[0] === "+" && s[1] === "-") ||
    (s[0] === "-" && s[1] === "+")
  ) {
    return 0;
  }
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  let flag = false;
  const index = s.indexOf(".");
  if (index > -1) {
    s = s.substring(0, index);
  }

  if (s[0] === "-") {
    flag = true;
    s = s.substring(1);
  }

  s = s.replace(/\D/g, "");

  if (flag) {
    if (-+s < min) {
      return min;
    } else {
      return -+s;
    }
  } else {
    if (+s > max) {
      return max;
    } else {
      return +s;
    }
  }
};
