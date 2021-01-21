/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  Runtime: 84 ms, faster than 87.35% of JavaScript online submissions for Isomorphic Strings.
//  Memory Usage: 39.8 MB, less than 68.52% of JavaScript online submissions for Isomorphic Strings.
export default (s, t) => {
  const first_s_index = new Map();
  const first_t_index = new Map();

  for (let i = 0; i < s.length; i++) {
    if (first_s_index.get(s[i]) !== first_t_index.get(t[i])) {
      return false;
    }
    first_s_index.set(s[i], i + 1);
    first_t_index.set(t[i], i + 1);
  }
  return true;
};
