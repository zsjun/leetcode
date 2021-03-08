/**
 * @param {string} s
 * @return {number}
 */
const isMatch = (s, begin, end) => {
  let low = begin;
  let high = end;
  if (begin === end) return true;
  while (low <= high) {
    if (s.charAt(low) === s.charAt(high)) {
      ++low;
      --high;
    } else {
      return false;
    }
  }
  return true;
};
("ababa");
export default (s) => {
  if (!s || s === null || s.length === 0) return 0;
  const len = s.length;
  if (isMatch(s, 0, len - 1)) {
    return 1;
  }
  return 2;
};
