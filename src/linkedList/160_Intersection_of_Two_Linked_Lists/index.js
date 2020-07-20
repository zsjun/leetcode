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
export default (headA, headB) => {
  if (headA == null || headB == null) return null;
  let pointA = headA;
  let pointB = headB;
  while (pointA !== pointB) {
    if (pointA === null) {
      pointA = headB;
    } else {
      pointA = pointA.next;
    }

    if (pointB === null) {
      pointB = headA;
    } else {
      pointB = pointB.next;
    }
  }
  return pointA;
};
