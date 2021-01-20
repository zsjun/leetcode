/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Runtime: 88 ms, faster than 73.09% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 39.8 MB, less than 69.51% of JavaScript online submissions for Isomorphic Strings.
export default (s, t) => {
  const s_first_index = new Map();
  const t_first_index = new Map();
  for (let i = 0; i < s.length; i++) {
    if (s_first_index.get(s.charAt(i)) !== t_first_index.get(t.charAt(i))) {
      return false;
    }
    s_first_index.set(s.charAt(i), i + 1);
    t_first_index.set(t.charAt(i), i + 1);
  }
  return true;
};
