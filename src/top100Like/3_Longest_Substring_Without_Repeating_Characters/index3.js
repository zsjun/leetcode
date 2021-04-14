// "abba";
export default (s) => {
  if (s.length === 0) return 0;
  const map = new Map();
  let max = 1;
  let low = 0;
  let high = 0;
  // if (map.has(s.charAt(i))) {
  //   low = Math.max(low, map.get(s.charAt(i)) + 1);
  // }
  // map.set(s.charAt(i), i);
  // max = Math.max(max, i - j + 1);
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      low = map.get(s.charAt(i)) + 1;
      for (let [key, val] of map) {
        if (val < low) {
          map.delete(key);
        }
      }
      map.set(s.charAt(i), i);
    } else {
      // console.log(low,high)
      map.set(s.charAt(i), i);
      high = i;
      max = Math.max(max, high - low + 1);
    }
  }
  return max;
};
