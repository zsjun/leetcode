/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
// digits 是有序的
export default (digits, n) => {
  let NS = "" + n;
  let dsize = digits.length;
  let digit = NS.length;
  let res = 0;
  // 先计算出所有小于n位数的总和
  for (let i = 1; i < digit; i++) {
    res += Math.pow(dsize, i);
  }
  // 利用dp，计算有多少个和n同样位数的数字的个数
  // 比如["3", "4", "5", "6"], 64
  // 放置3在第一位，则3，4，5，6可以随便放在第二位
  // 放置4在第一位，则3，4，5，6可以随便放在第二位
  // 放置5在第一位，则3，4，5，6可以随便放在第二位
  // 放置6在第一位的时候，这个时候，需要跳出循环，继续下一位的比较,这时候就变成了第一位放置了6，然后看下一位放啥
  // 因为第一位已经固定了6，则只剩下一位了
  // 放置3在第二位，成立
  // 放置4在第二位，因为4 === 4，所以两者相同，继续跳出
  // 最后循环结束
  // 这是典型的数字dp算法
  for (let i = 0; i < digit; i++) {
    let hasSamePre = false;
    for (let j = 0; j < dsize; j++) {
      if (digits[j] < NS[i]) {
        res += Math.pow(dsize, digit - i - 1);
      } else if (digits[j] === NS[i]) {
        hasSamePre = true;
        break;
      }
    }
    if (!hasSamePre) return res;
  }
  return res + 1;
};
