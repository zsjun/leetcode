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

// Runtime: 108 ms, faster than 67.62% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 46.3 MB, less than 42.59% of JavaScript online submissions for Intersection of Two Linked Lists.
// 时间复杂度O（m+n）
export default (headA, headB) => {
  if (headA === null || headB === null) return null;

  let preA = headA;
  let preB = headB;

  let finishedA = false;
  let finishedB = false;

  while (headA != null && headB !== null) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
    if (headA === null && finishedA) {
      return null;
    } else if (headA === null && !finishedA) {
      headA = preB;
      finishedA = true;
    }
    if (headB === null && finishedB) {
      return null;
    } else if (headB === null && !finishedB) {
      headB = preA;
      finishedB = true;
    }
  }
  return null;
};
