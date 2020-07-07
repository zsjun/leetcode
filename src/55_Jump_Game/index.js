/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  if (nums.length === 1) return true;
  // 是否可以跳到i步，如果可以跳到i步，则为true
  let jump = [true];
  for (let index = 1; index < nums.length; index++) {
    jump[index] = false;
    for (let i = 0; i < index; i++) {
      if (nums[i] >= index - i && jump[i]) {
        jump[index] = true;
        break;
      }
    }
  }
  return jump[jump.length - 1];
};
export default canJump;
