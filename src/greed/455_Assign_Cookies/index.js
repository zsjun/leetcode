/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
export default (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0;
  let childs = 0;
  for (let i = 0; i < g.length; i++) {
    while (j < s.length) {
      if (s[j] >= g[i]) {
        childs++;
        j++;
        break;
      } else {
        j++;
      }
    }
  }
  return childs;
};
