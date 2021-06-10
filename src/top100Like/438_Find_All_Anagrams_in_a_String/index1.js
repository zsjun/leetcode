/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 基本思想，利用两个指针，一个前，一个后，前面的先遍历完放到map里边，然后后面的再遍历，给拾起来
export default (s, t) => {
  const result = [];
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
  let head = 0;
  let len = Number.MAX_VALUE;

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
      if (end - begin === t.length) {
        result.push(begin);
      }
      begin++;
    }
  }

  return result;
};
