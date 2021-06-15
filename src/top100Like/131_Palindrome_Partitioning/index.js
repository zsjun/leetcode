/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Input: nums = [1, 2, 2];
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
const isPalindrome = (s, low, high) => {
  while (low < high) if (s.charAt(low++) !== s.charAt(high--)) return false;
  return true;
};
const backtrack = (res, tempRes, s, start) => {
  if (start === s.length) res.push([...tempRes]);
  else {
    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s, start, i)) {
        tempRes.push(s.substring(start, i + 1));
        backtrack(res, tempRes, s, i + 1);
        tempRes.pop();
      }
    }
  }
};
// Runtime: 252 ms, faster than 79.21% of JavaScript online submissions for Palindrome Partitioning.
// Memory Usage: 60.8 MB, less than 73.03% of JavaScript online submissions for Palindrome Partitioning.
export default (s) => {
  const res = [];
  // nums.sort();
  backtrack(res, [], s, 0);
  return res;
};
