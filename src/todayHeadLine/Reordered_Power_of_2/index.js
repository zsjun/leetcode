/**
 * @param {number} N
 * @return {boolean}
 */
export default (N) => {
  let map = new Map();
  if (map.size <= 0) {
    let pow = 0;
    let res = Math.pow(2, pow);
    while (res <= 1000000000) {
      res = Math.pow(2, pow);
      let ar = map.get(res.toString().length) || new Array();
      ar.push(res);
      map.set(res.toString().length, ar);
      pow++;
    }
  }

  let ar = map.get(N.toString().length);
  N = N.toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");

  for (let val of ar) {
    if (
      val
        .toString()
        .split("")
        .sort((a, b) => a - b)
        .join("") == N
    ) {
      return true;
    }
  }
  return false;
};
