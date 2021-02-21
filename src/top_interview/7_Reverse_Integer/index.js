/**
 * @param {number} x
 * @return {number}
 */
//  Runtime: 132 ms, faster than 11.90% of JavaScript online submissions for Reverse Integer.
//  Memory Usage: 40.7 MB, less than 17.82% of JavaScript online submissions for Reverse Integer.
var reverse = function (x) {
  x = "" + x;
  const arr = [];
  let isflag = false;
  for (let i = x.length - 1; i >= 0; i--) {
    if (x.charAt(i) !== "-") {
      arr.push(x.charAt(i));
    } else {
      isflag = true;
    }
  }
  if (isflag) {
    x = "-" + arr.join("");
  } else {
    x = arr.join("");
  }
  if (+x > Math.pow(2, 31) - 1) {
    return 0;
  } else if (+x < -Math.pow(2, 31)) {
    return 0;
  } else {
    return +x;
  }
};
