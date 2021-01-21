/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 600 ms, faster than 16.13% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 79.4 MB, less than 5.04% of JavaScript online submissions for Palindromic Substrings.
export default (s) => {
  let count = s.length;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(`${i}_${i}`, 1);
  }
  for (let i = 2; i <= s.length; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      let k = j + i - 1;
      let m = j;
      const begin = j;
      const end = k;
      if (begin >= 1 && end >= 1 && map.get(`${begin - 1}_${end - 1}`) === 1 && s[begin] === s[end]) {
        count++;
        map.set(`${begin}_${end}`, 1);
      } else {
        while (m < k) {
          if (s.charAt(m) === s.charAt(k)) {
            m++;
            k--;
          } else {
            break;
          }
        }
        if (m >= k) {
          count++;
          map.set(`${begin}${end}`, 1);
        }
      }
    }
  }
  return count;
};
