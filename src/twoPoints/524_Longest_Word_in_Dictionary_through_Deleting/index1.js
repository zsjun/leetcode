/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
export default (s, d) => {
  // 首先按照长度降序排序，如果字符串长度相同，按照字典序升序排序
  d.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  for (let i = 0; i < d.length; i++) {
    let index = -1;
    for (let j = 0; j < d[i].length; j++) {
      // 判断在d[i]中的字符是否也在s中，同时相对顺序是一定的
      index = s.indexOf(d[i][j], index + 1);
      // 如果不存在，就没必要进行下去了
      if (index < 0) {
        break;
      }
    }
    // 如果找到了，直接跳出
    if (index >= 0) {
      return d[i];
    }
  }
  return "";
};
