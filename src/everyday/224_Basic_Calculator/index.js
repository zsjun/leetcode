/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const res = [];
  let sign = 1;
  for (let i = 0; i < s.length; ) {
    if (s.charAt(i) !== "(" && s.charAt(i) !== ")" && s.charAt(i) !== " ") {
      if (s.charAt(i) === "-") {
        i++;
        sign = -1;
      } else if (s.charAt(i) === "+") {
        i++;
        sign = 1;
      } else {
        let begin = i;
        let end = i + 1;
        if (+s.charAt(end) >= 0) {
          while (+s.charAt(end) >= 0 && end <= s.length) {
            end++;
          }
        }

        res.push(+s.substring(begin, end) * sign);
        i = end;
      }
    } else {
      i++;
    }
  }
  //  console.log(res)
  if (res.length === 1) {
    return res[0];
  }

  return res.reduce((a, b) => a + b);
};
