/**
 * @param {number[]} nums
 * @return {number}
 */
// [1, 3, 4, 2, 2];
// 采用下标构造龟兔赛跑的机制，
// 龟兔赛跑有两个重点 1 是首先找到相遇点，2然后乌龟从起点出发，兔子从相遇点出发，两者再次相遇就是圆环起点

// Runtime: 164 ms, faster than 25.28% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 47.8 MB, less than 63.42% of JavaScript online submissions for Find the Duplicate Number.
export default (nums) => {
  if (nums == null || nums.length == 0) {
    return -1;
  }
  // 同一起点
  let slow = nums[0];
  let fast = nums[nums[slow]];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
