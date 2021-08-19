/**
 * @param {number[]} deliciousness
 * @return {number}
 */
// Runtime: 224 ms, faster than 73.91% of JavaScript online submissions for Count Good Meals.
// Memory Usage: 52.5 MB, less than 73.91% of JavaScript online submissions for Count Good Meals.
// 多注意题目，这里涉及到pow
export default (deliciousness) => {
  const mod = 1000000007;
  const map = new Map();
  const len = deliciousness.length;
  let sum = 0;
  for (const num of deliciousness) {
    let power = 1;
    for (let i = 0; i < 22; i++) {
      if (map.has(power - num)) {
        sum += map.get(power - num);
        sum %= mod;
      }
      power *= 2;
    }
    const number = map.get(num) || 0;
    map.set(num, number + 1);
  }
  return sum;
};
