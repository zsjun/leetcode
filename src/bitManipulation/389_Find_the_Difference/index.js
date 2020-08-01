/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
export default (s, t) => {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res ^= s.charCodeAt(i);
  }
  for (let j = 0; j < t.length; j++) {
    res ^= t.charCodeAt(j);
  }
  if (!res) {
    return s;
  } else {
    return String.fromCharCode(res);
  }
};
