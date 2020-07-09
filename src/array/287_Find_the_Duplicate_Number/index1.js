/**
 * @param {number[]} nums
 * @return {number}
 */
export default (nums) => {
  if (nums.length > 1) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    // 采用龟兔赛跑，乌龟每次走一步，兔子每次走两步，如果他们相遇，则一定在循环中，本次循环是找到在循环中的相遇点
    while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
    }
    // 本次循环利用找到相遇点之后，从头开始和从相遇点开始，两者走相同的距离，则会发现相遇点，也就是重复元素
    fast = 0;
    while (slow !== fast) {
      fast = nums[fast];
      slow = nums[slow];
    }
    return slow;
  }
};
