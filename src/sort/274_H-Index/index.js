/**
 * @param {number[]} citations
 * @return {number}
 */
export default (citations) => {
  // 处理特殊情况
  if (!citations || citations.length === 0) {
    return 0;
  }
  citations.sort((a, b) => b - a);
  let h = 0;
  let i = 0;
  while (citations[i] >= h && i < citations.length) {
    h++;
    i++;
  }
  return Math.min(h, citations[i - 1]);
};
