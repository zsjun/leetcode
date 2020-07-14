/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  if (!s) return 0;
  if (s.length === 1) return 1;
  const map = new Map();
  for (let key of s) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  let hasQuiqe = false;
  let count = 0;
  let maxQuiqe = 0;

  for (let key of s) {
    if (map.get(key) % 2 === 0) {
      count += map.get(key);
    } else {
      if (map.has(key) && !hasQuiqe) {
        count += map.get(key);
        hasQuiqe = true;
      } else if (map.has(key) && hasQuiqe && map.get(key) >= 3) {
        count += map.get(key) - 1;
      }
    }
    map.delete(key);
  }
  return count;
};
