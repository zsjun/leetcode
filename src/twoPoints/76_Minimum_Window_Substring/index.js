/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export default (s, t) => {
  const flag = new Map();
  const chars = new Map();
  for (let i = 0; i < t.length; i++) {
    flag.set(t[i], true);
    if (!chars.has(t[i])) {
      chars.set(t[i], 1);
    } else {
      let count = chars.get(t[i]) + 1;
      chars.set(t[i], count);
    }
  }

  let cnt = 0,
    l = 0,
    min_l = 0,
    min_size = s.length + 1;

  for (let r = 0; r < s.length; r++) {
    // console.log(flag.has(s[r]), s[r]);
    if (flag.has(s[r])) {
      let count = chars.get(s[r]) - 1;
      chars.set(s[r], count);
      if (count >= 0) {
        cnt++;
      }
      // 若目前滑动窗口已包含T中全部字符，
      // 则尝试将l右移，在不影响结果的情况下获得最短子字符串
      // console.log(cnt, s[l], flag.has(s[l]), chars.get(s[l]) + 1);
      while (cnt === t.length) {
        if (r - l + 1 < min_size) {
          min_l = l;
          min_size = r - l + 1;
        }
        let count = chars.get(s[l]) + 1;
        chars.set(s[l], count);
        if (flag.has(s[l]) && count > 0) {
          cnt--;
        }
        l++;
      }
      // console.log(min_l, min_size);
    }
  }
  console.log(min_l, min_size);
  return min_size > s.length ? "" : s.substr(min_l, min_size);
};
