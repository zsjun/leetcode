// 有N个小黄鸡，每P个可以合成一个银色小黄鸡，每Q个可以合成一个金色小黄鸡
// 请问通过合理的合成，能让所有鸡的最小数量是多少？
// 1<P<Q

export default (n, p, q) => {
  // 表示i只金色，j只银色，m只小黄鸡
  let preArr = [0, 0, p - 1];
  for (let i = p; i <= n; i++) {
    let m1 = preArr[2];
    let pNum = preArr[1];
    let qNum = preArr[0];
    // 增加一个只小黄鸡
    let addM1 = m1 + pNum + qNum + 1;
    let addP1 = Infinity;
    let addQ1 = Infinity;
    // 增加一直银色的
    if (m1 + 1 >= p) {
      addP1 = Math.min(qNum + pNum + 1, addP1);
    }
    // console.log(addP1, qNum + pNum + 1 + m1 + 1 - p);
    // 增加一只金色
    if (m1 + 1 + pNum * p >= q) {
      addQ1 = Math.min(addQ1, qNum + 1 + pNum - Math.floor(q / p) + m1 + 1 - (q - Math.floor(q / p) * p));
    }
    // console.log(addM1, addP1, addQ1);
    if (addM1 <= addP1 && addM1 <= addQ1) {
      qNum = qNum === Infinity ? 0 : qNum;
      pNum = pNum === Infinity ? 0 : pNum;
      preArr = [qNum, pNum, m1 + 1];
    } else if (addP1 <= addM1 && addP1 <= addQ1) {
      qNum = qNum === Infinity ? 0 : qNum;
      pNum = pNum === Infinity ? 0 : pNum;
      preArr = [qNum, pNum + 1, 0];
    } else if (addQ1 <= addM1 && addQ1 <= addM1) {
      qNum = qNum === Infinity ? 0 : qNum;
      pNum = pNum === Infinity ? 0 : pNum;
      preArr = [qNum + 1, pNum - Math.floor(q / p), m1 + 1 - (q - Math.floor(q / p) * p)];
    }
    console.log(preArr);
  }

  return preArr.reduce((a, b) => a + b);
};
