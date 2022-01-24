/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  // 目前剩余的汽油量
  let total_surplus = 0;
  //
  let surplus = 0;
  // 开始的起点
  let start = 0;

  for (let i = 0; i < n; i++) {
    total_surplus += gas[i] - cost[i];
    surplus += gas[i] - cost[i];
    if (surplus < 0) {
      surplus = 0;
      start = i + 1;
    }
  }
  return total_surplus < 0 ? -1 : start;
};
