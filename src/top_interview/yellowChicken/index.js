// 有N个小黄鸡，每P个可以合成一个银色小黄鸡，每Q个可以合成一个金色小黄鸡
// 请问通过合理的合成，能让所有鸡的最小数量是多少？
// 1<P<Q

export default (n, p, q) => {
  let maxQnum = Math.ceil(n / q);
  let minNum = Infinity;

  for (let i = 0; i <= maxQnum; i++) {
    let maxPnum = Math.ceil((n - i * q) / p);
    for (let j = 0; j <= maxPnum; j++) {
      let chickenNum = n - (i * q + j * p);
      if (chickenNum >= 0) {
        minNum = Math.min(minNum, i + j + chickenNum);
      }
    }
  }
  return minNum;
};
