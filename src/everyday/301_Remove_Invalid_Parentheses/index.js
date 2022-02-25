d;
/**
 * @param {string} s
 * @return {string[]}
 */
const helper = (res, s, pos, last_del, chars) => {
  // console.log(s,pos,last_del,chars)
  let stack = 0;
  for (let i = pos; i < s.length; i++) {
    if (s.charAt(i) === chars[0]) stack++;
    if (s.charAt(i) === chars[1]) stack--;
    if (stack >= 0) continue;

    for (let j = last_del; j <= i; j++) {
      if (
        s.charAt(j) === chars[1] &&
        (j === last_del || s.charAt(j - 1) !== chars[1])
      ) {
        helper(
          res,
          s.substring(0, j) + s.substring(j + 1, s.length),
          i,
          j,
          chars
        );
      }
    }
    return;
  }
  const reverStr = s.split("").reverse().join("");
  if (chars[0] === "(") {
    helper(res, reverStr, 0, 0, [")", "("]);
  } else {
    res.push(reverStr);
  }
};

var removeInvalidParentheses = function (s) {
  const res = [];
  helper(res, s, 0, 0, ["(", ")"]);
  return res;
};
