/**
 * @param {number[]} nums
 * @return {number}
 */

function CeilIndex(int A[], int l, int r, int key)
{
    while (r - l > 1) {
        int m = l + (r - l) / 2;
        if (A[m] >= key)
            r = m;
        else
            l = m;
    }

    return r;
}
// Runtime: 168 ms, faster than 55.06% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 39.4 MB, less than 66.46% of JavaScript online submissions for Longest Increasing Subsequence.
export default (nums) => {
  // Add boundary case, when array size is one
  const len = nums.length;
  const tailTable = new Array(len).fill(0);
  int len; // always points empty slot

  tailTable[0] = [0];
  len = 1;

  for (int i = 1; i < size; i++) {
      if (A[i] < tailTable[0])
          // new smallest value
          tailTable[0] = A[i];

      else if (A[i] > tailTable[len - 1])
          // A[i] wants to extend largest subsequence
          tailTable[len++] = A[i];

      else
          // A[i] wants to be current end candidate of an existing
          // subsequence. It will replace ceil value in tailTable
          tailTable[CeilIndex(tailTable, -1, len - 1, A[i])] = A[i];
  }

  return len;
};
