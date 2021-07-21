/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  Runtime: 100 ms, faster than 82.35% of JavaScript online submissions for Count Number of Nice Subarrays.
//  Memory Usage: 48.5 MB, less than 78.43% of JavaScript online submissions for Count Number of Nice Subarrays.
// getAllOddNumLessEqualK
// 其实就是一个滑动窗口，如果这个窗口中有k-1个奇数，那么就会有j-begin+1个子连续数组是包含小于或者等于k-1个奇数的

atMost is find all ths subarrays equal or less k nums
how I interpret j-i+1

idea
step 1. find all subarrays that has most K odd number   (1,2,3 ...K)
step 2. find all subarrays that has most K-1 odd number  (1,2,3,...K-1)
step 3. find step 1 minus step 2 will result in subarrays only has K odd numbers

example
arr=[1,2,1,2,3]
K=2
begin is the slider window start and j is the slider window end
when K=2
begin       j-begin+1    j        contiguous subarray
0            1           0        [1]
0            2           1        [1,2], [2]
0            3           2        [1,2,1], [2,1], [1]
0            4           3        [1,2,1,2], [2,1,2], [1,2], [2]
1            4           4        [2,1,2,3], [1,2,3], [2,3], [3]
total                              14 subarrays

when K=1
begin        j-begin+1   j        contiguous subarray
0            1           0         [1]
0            2           1         [1,2], [2]
1            2           2         [2,1], [1]
1            3           3         [2,1,2], [1,2], [2]
3            2           4         [2,3], [3]
total                              10 subarrays

when K=2 minus when K=1 is 4 subarrays
[1,2,1], [1,2,1,2], [2,1,2,3], [1,2,3]
function getAllOddNumLessEqual(nums, k) {
  let res = 0,
    begin = 0,
    len = nums.length;
  for (let j = 0; j < len; j++) {
    // 如果nums[j] 是奇数
    if (nums[j] % 2 !== 0) {
      k--;
    }
    while (k < 0) {
      if (nums[begin] % 2 !== 0) {
        k++;
      }
      begin++;
    }
    res += j - begin + 1;
  }
  return res;
}
export default (nums, k) => {
  return getAllOddNumLessEqual(nums, k) - getAllOddNumLessEqual(nums, k - 1);
};
