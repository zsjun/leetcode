/**
* @param {number[]} nums
* @return {number}
*/
const rever = (s) => {
  s = s+""
  return +s.split("").reverse().join("")
}
const MOD = 1e9 + 7;
export default (nums) => {
  let map = new Map();
  let res = 0;
  for (const item of nums) {
      let target = item - rever(item);
      let cnt = map.get(target) || 0;
      res += cnt;
      map.set(target, cnt + 1);
  }
  return res % MOD;
}