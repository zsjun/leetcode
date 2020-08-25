/**
 * @param {string} S
 * @return {string}
 */
export default (S) => {
  let sHash = [];
  // 找到字符每次出现的次数
  for (let i = 0; i < S.length; i++) {
    if (!sHash[S.charCodeAt(i) - 97]) {
      sHash[S.charCodeAt(i) - 97] = 1;
    } else {
      sHash[S.charCodeAt(i) - 97]++;
    }
  }
  let max = 0;
  // 找到字符串中字符重复次数最多的，
  for (let i = 0; i < sHash.length; i++) {
    if (sHash[i] > max) {
      max = sHash[i];
    }
  }

  // 如果重复次数最多的字符，超过字符长度的一般，也就是说肯定会有重复的字符相邻
  if (max > Math.floor((S.length + 1) / 2)) {
    return "";
  }
  let res = [];
  let len = sHash.length;
  // 转成字符
  for (let i = 0; i < len; i++) {
    if (sHash[i]) {
      sHash[i] = {
        label: String.fromCharCode(i + 97),
        count: sHash[i],
      };
    }
  }
  // 排序，必须先放置重复次数最多的
  sHash.sort((a, b) => b.count - a.count);
  let index = 0;
  for (let j = 0; j < sHash.length; j++) {
    while (sHash[j] && sHash[j].count > 0) {
      res[index] = sHash[j].label;
      sHash[j].count--;
      index += 2;
      if (index >= S.length) {
        index = 1;
      }
    }
  }
  return res.join("");
};
