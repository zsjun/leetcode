export default (nums) => {
  if(nums.length === 0) return 0;
  let cost1 = nums[0];
  let cost2 = nums[0];
  let profit1 = 0;
  let profit2 = 0;

  for(let i = 1; i< nums.length;i++) {
    cost1 = Math.min(cost1, nums[i])
    profit1 = Math.max(profit1, nums[i]-cost1);
    cost2 = Math.min(cost2,nums[i] - profit1);
    profit2 = Math.max(profit2,nums[i] - cost2)

  }
  return profit2;
}


