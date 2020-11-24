/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export default (s, t) => {
  const tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!tMap.has(t[i])) {
      tMap.set(t[i], 1);
    } else {
      let count = tMap.get(t[i]) + 1;
      tMap.set(t[i], count);
    }
  }

  let cnt = 0,
    slow = 0,
    resStart = 0,
    resLen = s.length + 1;

  for (let fast = 0; fast < s.length; fast++) {
    if (tMap.has(s[fast])) {
      let count = tMap.get(s[fast]) - 1;
      tMap.set(s[fast], count);
      if (count >= 0) {
        cnt++;
      }
      // 若目前滑动窗口已包含T中全部字符，
      // 则尝试将l右移，在不影响结果的情况下获得最短子字符串
      while (cnt === t.length) {
        if (fast - slow + 1 < resLen) {
          resStart = slow;
          resLen = fast - slow + 1;
        }
        let count = tMap.get(s[slow]) + 1;
        tMap.set(s[slow], count);
        if (tMap.has(s[slow]) && count > 0) {
          cnt--;
        }
        slow++;
      }
    }
  }
  return resLen > s.length ? "" : s.substr(resStart, resLen);
};
