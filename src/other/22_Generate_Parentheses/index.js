/**
 * @param {number} n
 * @return {string[]}
 */
const generate = (left, right, str, n, res) => {
  if (left < n) {
    str += "(";
    left++;
    generate(left, right, str, n, res);
    if (str.length >= 1) {
      str = str.substring(0, str.length - 1);
      left--;
    }
  }

  if (left > right) {
    str += ")";
    right++;
    generate(left, right, str, n, res);
    if (str.length > 1) {
      str = str.substring(0, str.length - 1);
      right--;
    }
  }

  if (left === right && left === n) {
    res.push(str);
  }
};

export default (n) => {
  let res = [];
  generate(0, 0, "", n, res);
  console.log(res);
  return res;
};
