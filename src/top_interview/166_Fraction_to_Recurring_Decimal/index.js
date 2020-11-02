/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
export default (numerator, denominator) => {
  if (numerator === 0) return "0";

  let s = "";
  // 两者的一个是正数，一个数负数
  if (Math.sign(numerator) !== Math.sign(denominator)) {
    s += "-";
  }

  let n = Math.abs(numerator);
  const d = Math.abs(denominator);

  s += Math.floor(n / d);
  n %= d;

  if (n === 0) return s;

  s += ".";

  // 找到重复的
  const map = {};
  // n 是余数， 利用hashmap存储，如果余数和以前的相同则返回
  while (n !== 0) {
    map[n] = s.length;

    n *= 10;
    s += Math.floor(n / d);
    n %= d;

    const i = map[n];
    if (i != null) return `${s.slice(0, i)}(${s.slice(i)})`;
  }

  return s;
};
