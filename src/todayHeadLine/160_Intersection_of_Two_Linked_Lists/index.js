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
  if (!headA || !headB) return null;
  let curA = headA;
  let curB = headB;
  while (curA !== curB) {
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }
  return curA;
};
