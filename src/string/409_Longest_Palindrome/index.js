/**
 * @param {string} s
 * @return {number}
 */
// Runtime: 76 ms, faster than 96.49% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 40 MB, less than 62.11% of JavaScript online submissions for Longest Palindrome.
export default (s) => {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      const tempCount = map.get(s.charAt(i)) + 1;
      map.set(s.charAt(i), tempCount);
    } else {
      map.set(s.charAt(i), 1);
    }
  }

  // console.log(map)
  for (let [key, val] of map) {
    if (val % 2 === 0) {
      count += val;
    } else if (val % 2 !== 0) {
      count += val - 1;
    }
  }
  if (count < s.length) {
    return count + 1;
  } else {
    return count;
  }
};
