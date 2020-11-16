export default (S) => {
  if (S == null || S.length === 0) {
    return null;
  }
  const list = [];
  // 记录每个字符出现在字符串中的最后的位置
  const map = new Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    map[S.charCodeAt(i) - 97] = i;
  }
  // 记录每个子串出现的开始和结束
  let last = 0;
  let start = 0;
  for (let i = 0; i < S.length; i++) {
    last = Math.max(last, map[S.charCodeAt(i) - 97]);
    if (last === i) {
      list.push(last - start + 1);
      start = last + 1;
    }
  }
  return list;
};
