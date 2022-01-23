/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
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
  // end是结尾的位置
  while (end < s.length) {
    const c = s.charAt(end);
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        counter--;
      }
    }
    end++;
    // 如果counter等于0的时候，
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
