/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 88 ms	40.1 MB
export default (nums) => {
  const len = nums.length;
  // 如果只有一个元素，我们直接返回0
  if (len === 1) {
    return 0;
  }
  // 目前的步数可以达到的范围
  let reach = 0;
  let res = 0;

  for (let i = 0; i < len; ) {
    // 更新走一步可以到达的位置
    reach = Math.max(reach, i + nums[i]);
    // 如果走一步到达终点了，则返回
    if (reach >= len - 1) {
      return res + 1;
    }
    // 如果这一步，无法到达终点，我们必须走下一步了，步数加1，
    if (reach < len) {
      res++;
      // 从i+1到reach，更新可以到达的最大距离，
      let tempReach = reach;
      for (let j = i + 1; j <= tempReach; j++) {
        if (j + nums[j] > reach) {
          reach = j + nums[j];
          i = j;
          // 因为这里还是走了一步
          if (reach >= len - 1) {
            return res + 1;
          }
        }
      }
    }
  }
  return res;
};
