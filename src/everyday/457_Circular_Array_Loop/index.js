/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Moves the pointer 'i'
 */
function findNextIndex(nums, isForward, currentIndex) {
  let direction = nums[currentIndex] >= 0;
  if (isForward !== direction) return -1;
  let nextIndex = (currentIndex + nums[currentIndex]) % nums.length;

  if (nextIndex < 0) {
    nextIndex += nums.length;
  }
  if (nextIndex === currentIndex) {
    nextIndex = -1;
  }
  return nextIndex;
}
export default (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let isForward = nums[i] >= 0;
    let slow = i,
      fast = i;
    while (true) {
      slow = findNextIndex(nums, isForward, slow);
      fast = findNextIndex(nums, isForward, fast);
      if (fast !== -1) {
        fast = findNextIndex(nums, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }
    if (slow !== -1 && fast === slow) {
      return true;
    }
  }
  return false;
};
