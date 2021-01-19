/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

export default (A, B) => {
  // 按照索引排序数组
  const idxs = B.map((v, i) => i).sort((a, b) => B[b] - B[a]);

  A.sort((a, b) => b - a);
  const res = [];
  for (let i = 0; i < B.length; i++) {
    // 使用田忌赛马，下等马对上上等马
    res[idxs[i]] = A[0] > B[idxs[i]] ? A.shift() : A.pop();
  }
  return res;
};
