/**
* @param {number[]} nums
* @return {number}
*/
const rever = (s) => {
  s = s+""
  return +s.split("").reverse().join("")
}
export default (nums) => {
  let res = 0;
  for(let i = 0;i<nums.length;i++) {
    const reverI = rever(nums[i])
    for(let j = i+1;j<nums.length;j++) {
      if(nums[i]+rever(nums[j]) === nums[j] + reverI) {
        res++
      }
    }
  }
  return res
}