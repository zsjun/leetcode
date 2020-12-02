/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 	92 ms	39.7 MB
export default (nums) => {
  // max 表示当前步数可以到达的最大距离
  let max = 0;
  // 表示在当前步数步数覆盖范围内下一步可以达到的最大距离
  let nextMax = 0;
  // 步数
  let jumps = 0;

  nums.some((val, index) => {
    // 如果当前步数可以达到终点了，直接返回步数
    if (max >= nums.length - 1) {
      return jumps;
    }
    //
    nextMax = Math.max(index + val, nextMax);
    // 如果当前的步数已经走到了结束，则加一步
    if (index === max) {
      max = nextMax;
      jumps++;
    }
  });

  return jumps;
};
