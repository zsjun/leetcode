/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export default (s, t) => {
  const map = new Map();
  // 初始化map
  for (let val of t) {
    map.set(val, 0);
  }
  // 初始化map
  for (let val of t) {
    if (map.get(val) !== 0) {
      const count = map.get(val) + 1;
      map.set(val, count);
    } else {
      map.set(val, 1);
    }
  }
  // 初始位置
  let start = 0;
  let end = 0;

  // 最小子串的起始位置
  let minStart = 0;
  let minLen = Infinity;

  let tLen = t.length;
  let sLen = s.length;

  while (end < sLen) {
    if (map.get(s[end]) >= 1) {
      tLen--;
    }
    if (!map.get(s[end])) {
      map.set(s[end], -1);
    } else {
      map.set(s[end], map.get(s[end]) - 1);
    }
    end++;
    // 当找到包含t的子串的时候
    while (tLen === 0) {
      // 判断是否是最小的子串距离
      if (end - start < minLen) {
        minLen = end - start;
        // 最小子串开始的位置
        minStart = start;
      }
      // 现在开始移动start，直到找到第一个出现的t中的字符
      map.set(s[start], map.get(s[start]) + 1);
      // 找到了第一次出现的字符位置了
      if (map.get(s[start]) >= 1) {
        // 跳出循环，重新开始移动end指针，直到找到这里第一次出现的字符
        tLen++;
      }
      start++;
    }
  }
  if (minLen === Infinity) {
    return "";
  } else {
    return s.substr(minStart, minLen);
  }
};
