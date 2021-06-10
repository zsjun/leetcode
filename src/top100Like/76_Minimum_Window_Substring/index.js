/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//  Runtime: 112 ms, faster than 48.33% of JavaScript online submissions for Minimum Window Substring.
//  Memory Usage: 40.3 MB, less than 95.42% of JavaScript online submissions for Minimum Window Substring.
export default (s, t) => {
  let result = "";
  if (t.length > s.length) return result;
  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    if (!map.has(c)) {
      map.set(c, 1);
    } else {
      map.set(c, map.get(c) + 1);
    }
  }

  let counter = map.size;
  let begin = 0;
  let end = 0;
  let max = Number.MAX_VALUE;

  while (end < s.length) {
    const c = s.charAt(end);
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        counter--;
      }
    }
    end++;

    while (counter === 0) {
      const tempc = s.charAt(begin);
      if (map.has(tempc)) {
        map.set(tempc, map.get(tempc) + 1);
        if (map.get(tempc) > 0) {
          counter++;
        }
      }
      if (end - begin >= t.length && end - begin <= max) {
        result = s.substring(begin, end);
        max = Math.min(max, end - begin);
      }
      begin++;
    }
  }

  return result;
};
