/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Runtime: 100 ms, faster than 93.68% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 46.3 MB, less than 42.59% of JavaScript online submissions for Intersection of Two Linked Lists.
// 时间复杂度O（m+n）
export default (headA, headB) => {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  //if a & b have different len, then we will stop the loop after second iteration
  while (a != b) {
    //for the end of first iteration, we just reset the pointer to the head of another linkedlist
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
};
